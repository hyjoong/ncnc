export interface CategoryListType {
  conCategory1s: CategoryData[];
}

export interface BrandListType {
  conCategory1: {
    conCategory2s: CategoryData[];
    name: string;
  };
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
  conCategory1Id: BrandItem[];
}

export interface BrandItem {
  conCategory2Id?: number;
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
