export type Producto = {
   id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};

export type ProductoWithImage = Producto & {
   image: string;
};