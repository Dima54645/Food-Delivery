export interface IProduct {
  id: number;
  name: string;
  category: string;
  img: string;
  description: string;
  price: string;
}

export interface IProductsData extends Omit<IProduct, "id"> {}
