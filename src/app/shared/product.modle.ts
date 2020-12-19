export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  imageUrl?: string;
  video?: string;
  quantity?:number
}