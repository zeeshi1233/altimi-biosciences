import { create } from "zustand";

export interface ContactFormDataState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface UIStoreState {
  // Navbar state
  activeDropdown: "about" | "products" | null;
  setActiveDropdown: (dropdown: "about" | "products" | null) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Contact form state
  contactForm: ContactFormDataState;
  setContactFormField: (field: keyof ContactFormDataState, value: string) => void;
  setAllContactFields: (data: Partial<ContactFormDataState>) => void;
  submitRequested: number;
  triggerContactSubmit: () => void;
  resetContactForm: () => void;
}

export const useUIStore = create<UIStoreState>((set) => ({
  activeDropdown: null,
  setActiveDropdown: (dropdown) => set({ activeDropdown: dropdown }),

  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

  contactForm: {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  },
  setContactFormField: (field, value) =>
    set((state) => ({
      contactForm: {
        ...state.contactForm,
        [field]: value,
      },
    })),
  setAllContactFields: (data) =>
    set((state) => ({
      contactForm: {
        ...state.contactForm,
        ...data,
      },
    })),
  submitRequested: 0,
  triggerContactSubmit: () =>
    set((state) => ({ submitRequested: state.submitRequested + 1 })),
  resetContactForm: () =>
    set({
      contactForm: {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    }),
}));

