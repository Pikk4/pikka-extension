export interface IProduct {
  date: { [key: string]: IPriceData };
  name: string;
  productId: string;
  url: string;
}

export interface IPriceData {
  actualPrice: number;
  date: number;
  discount: string;
  noDiscPrice?: number;
}
