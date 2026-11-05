export type ProductCategory =
  | "clinical-chemistry-analyzer"
  | "medical-consumables"
  | "medical-devices"
  | "diagnostic-kits"
  | "hospital-supplies"
  | "medicine-drugs";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  specifications: ProductSpec[];
  certifications: string[];
  brochureUrl?: string;
  featured?: boolean;
  badge?: string;
  modelCode?: string;
  brand?: string;
}

