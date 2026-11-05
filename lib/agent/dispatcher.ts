import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useUIStore } from "@/stores/uiStore";

export interface ToolExecutionResult {
  success: boolean;
  message: string;
}

export async function executeToolCall(
  toolName: string,
  args: Record<string, any>,
  router: AppRouterInstance
): Promise<ToolExecutionResult> {
  const uiStore = useUIStore.getState();

  try {
    switch (toolName) {
      case "navigate": {
        const path = args.path || "/";
        router.push(path);
        return { success: true, message: `Navigated to ${path}` };
      }

      case "scroll": {
        const direction = args.direction || "down";
        const amount = typeof args.amount === "number" ? args.amount : 600;
        const delta = direction === "down" ? amount : -amount;
        const target = Math.max(0, window.scrollY + delta);

        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(target, { duration: 1.2 });
        } else {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
        return { success: true, message: `Scrolled ${direction} by ${amount}px` };
      }

      case "scrollToSection": {
        const rawId = (args.id || "").replace(/^#/, "");
        const element =
          document.getElementById(rawId) ||
          document.querySelector(`[data-section="${rawId}"]`) ||
          document.querySelector(`[id*="${rawId}"]`);

        if (element) {
          const lenis = (window as any).__lenis;
          if (lenis && typeof lenis.scrollTo === "function") {
            lenis.scrollTo(element, { offset: -90, duration: 1.2 });
          } else {
            const top = element.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: "smooth" });
          }
          return { success: true, message: `Scrolled to section #${rawId}` };
        } else {
          // If element not on current page, check if it's on homepage
          if (window.location.pathname !== "/") {
            router.push(`/#${rawId}`);
            return {
              success: true,
              message: `Navigating to homepage section #${rawId}`,
            };
          }
          return {
            success: false,
            message: `Section #${rawId} not found on this page.`,
          };
        }
      }

      case "openDropdown": {
        const menu = args.menu as "about" | "products";
        if (menu === "about" || menu === "products") {
          uiStore.setActiveDropdown(menu);
          // Scroll up slightly if user is scrolled past navbar to make it visible
          if (window.scrollY > 300) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          return { success: true, message: `Opened '${menu}' navigation dropdown` };
        }
        return { success: false, message: `Invalid menu '${args.menu}'` };
      }

      case "closeDropdown": {
        uiStore.setActiveDropdown(null);
        return { success: true, message: "Closed active navigation dropdown" };
      }

      case "selectDropdownItem": {
        uiStore.setActiveDropdown(null);
        const path = args.path;
        if (path) {
          router.push(path);
          return {
            success: true,
            message: `Selected '${args.label}' (${path})`,
          };
        }
        return { success: false, message: "Missing item path" };
      }

      case "goBack": {
        if (window.history.length > 1) {
          router.back();
          return { success: true, message: "Navigated back" };
        } else {
          router.push("/");
          return { success: true, message: "Navigated to home" };
        }
      }

      case "fillContactForm": {
        const { field, value } = args;
        if (field && value !== undefined) {
          uiStore.setContactFormField(field as any, String(value));
          // If on contact page or home page with contact section, scroll to form so user sees it
          const contactSec = document.getElementById("contact-section");
          if (contactSec) {
            const lenis = (window as any).__lenis;
            if (lenis && typeof lenis.scrollTo === "function") {
              lenis.scrollTo(contactSec, { offset: -80 });
            } else {
              contactSec.scrollIntoView({ behavior: "smooth" });
            }
          }
          return { success: true, message: `Set ${field} to "${value}"` };
        }
        return { success: false, message: "Invalid form field or value" };
      }

      case "submitContactForm": {
        uiStore.triggerContactSubmit();
        return { success: true, message: "Triggered contact form submission" };
      }

      default:
        return {
          success: false,
          message: `Unknown tool '${toolName}'`,
        };
    }
  } catch (error: any) {
    console.error(`Tool execution error [${toolName}]:`, error);
    return {
      success: false,
      message: `Error executing ${toolName}: ${error.message}`,
    };
  }
}

