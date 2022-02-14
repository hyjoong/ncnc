export interface CategoryList {
  conCategory1s: CategoryData[];
}

export interface CategoryData {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
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
