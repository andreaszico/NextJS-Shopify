export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductPrice {
  value: number;
  currencyCode: "USD" | "EUR" | string;
}

export interface ProductOptionsValues {
  label: string;
  hexColor?: string;
}

export interface ProductOptions {
  id: string;
  displayName: string;
  values: ProductOptionsValues[];
}

export interface ProductVariant {
  id: string
  name: string
  options: ProductOptions[]
}

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  price: ProductPrice;
  options: ProductOptions[];
  variants: ProductVariant[]
}
