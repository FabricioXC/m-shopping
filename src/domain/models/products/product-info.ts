export type ProductInfo = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type ProductInfoShoppingCart = ProductInfo & {
  qty: number;
  note: string;
};

export type ApiProductInfo = ProductInfo & {
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};
