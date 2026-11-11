export type ProductCategory =
  | "chemistry-analyzer"
  | "molecular-analyzer"
  | "diagnostic-kits"
  | "cardiac-monitors"
  | "automatic-blood-pressure-monitor"
  | "biosimilar-drugs"
  | "alcohol-pads"
  | "dignity-underpads"
  | "surgical-gloves";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductModel {
  id: string;
  slug?: string;
  name: string;
  modelCode?: string;
  image: string;
  gallery?: string[];
  shortDescription: string;
  badge?: string;
  features?: string[];
  specifications?: ProductSpec[];
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
  country?: string;
  models?: ProductModel[];
}
