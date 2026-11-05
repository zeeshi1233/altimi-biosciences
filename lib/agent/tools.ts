export const AGENT_TOOLS = [
  {
    name: "navigate",
    description: "Navigate to a specific page or route on the Altimi Biosciences website.",
    parameters: {
      type: "OBJECT",
      properties: {
        path: {
          type: "STRING",
          description: "Target URL path starting with a forward slash (e.g. '/products', '/about/leadership', '/about/distribution', '/contact', '/brochures', '/media', '/events', '/faq', '/').",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "scroll",
    description: "Scroll the page smoothly up or down by a specific pixel distance.",
    parameters: {
      type: "OBJECT",
      properties: {
        direction: {
          type: "STRING",
          enum: ["up", "down"],
          description: "Direction to scroll the page.",
        },
        amount: {
          type: "NUMBER",
          description: "Pixel distance to scroll (e.g. 500 or 800). Defaults to 600 if not specified.",
        },
      },
      required: ["direction"],
    },
  },
  {
    name: "scrollToSection",
    description: "Scroll smoothly to a specific section on the current page by its HTML element ID.",
    parameters: {
      type: "OBJECT",
      properties: {
        id: {
          type: "STRING",
          description: "HTML id of the target section (e.g. 'hero', 'about', 'expertise', 'products-showcase', 'partners', 'contact-section').",
        },
      },
      required: ["id"],
    },
  },
  {
    name: "openDropdown",
    description: "Open one of the navbar dropdown menus ('about' or 'products') to reveal its links.",
    parameters: {
      type: "OBJECT",
      properties: {
        menu: {
          type: "STRING",
          enum: ["about", "products"],
          description: "The navbar dropdown menu to open: 'about' for About Us, or 'products' for Products.",
        },
      },
      required: ["menu"],
    },
  },
  {
    name: "closeDropdown",
    description: "Close any currently open navbar dropdown menu.",
    parameters: {
      type: "OBJECT",
      properties: {},
    },
  },
  {
    name: "selectDropdownItem",
    description: "Select and navigate to a specific item from an open navbar dropdown menu.",
    parameters: {
      type: "OBJECT",
      properties: {
        label: {
          type: "STRING",
          description: "The name of the dropdown item (e.g. 'Executive Leadership', 'Nationwide Distribution', 'Randox RX Modena', 'Randox RX Imola').",
        },
        path: {
          type: "STRING",
          description: "Target URL path of the chosen dropdown item.",
        },
      },
      required: ["label", "path"],
    },
  },
  {
    name: "goBack",
    description: "Navigate back to the previous page in browser history.",
    parameters: {
      type: "OBJECT",
      properties: {},
    },
  },
  {
    name: "fillContactForm",
    description: "Fill or update a specific field in the contact / quotation inquiry form.",
    parameters: {
      type: "OBJECT",
      properties: {
        field: {
          type: "STRING",
          enum: ["fullName", "email", "phone", "subject", "message"],
          description: "The form field to update.",
        },
        value: {
          type: "STRING",
          description: "The value to enter into the contact form field.",
        },
      },
      required: ["field", "value"],
    },
  },
  {
    name: "submitContactForm",
    description: "Submit the filled contact form. Note: You must always ask the user for verbal or written confirmation before executing this action.",
    parameters: {
      type: "OBJECT",
      properties: {},
    },
  },
];

