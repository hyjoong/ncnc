export interface CategoryListType {
  conCategory1s: CategoryData[];
}

export interface BrandListType {
  conCategory1: {
    conCategory2s: CategoryData[];
    name: string;
    id: number;
  };
}

export interface BrandItemListType {
  conCategory1: BrandListType["conCategory1"];
}

export interface CategoryData {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface BrandType {
  id: number;
  imageUrl: string;
  name: string;
  conItems: BrandItem[];
  conCategory1Id: number;
}

export interface BrandItem {
  conCategory2Id: number;
  discountRate: number;
  id: number;
  imageUrl: string;
  info: string | null;
  information: string | null;
  isOnlyAccount: number;
  minSellingPrice: number;
  name: string;
  ncSellingPrice: number;
  originalPrice: number;
  tip: string;
  warning: string;
}

export interface ItemsList {
  conItems: BrandItem[];
}

export interface Option {
  count: number;
  expireAt: string;
  sellingPrice: string;
}

export interface ProductItem extends BrandItem {
  options: Option[];
}

export interface ProductDetail {
  conItem: ProductItem;
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: string | null;
  tip: string | null;
  warning: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: string | null;
  isOnlyAccount: number;
  conCategory2Id: string;
  imageUrl: string;
}

export interface BrandTitle {
  conCategory2: BrandType;
}

export interface faType {
  id: number;
  key: string;
  name: string;
}

export interface faContent {
  id: number;
  question: string;
  answer: string;
}

export interface SaleItem {
  conItems: BrandItem[];
}
