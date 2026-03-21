export interface Product {
  id: string;
  name: string;
  price: number;
  priceMax?: number;
  description?: string;
  image?: string;
  category: 'all' | 'combo' | 'bread' | 'lightFood' | 'hotDessert' | 'coldDessert' | 'bebidas' | 'coffee' | 'packageFood';
  isPopular?: boolean;
  squareUrl: string;
}


export type Category = 'all' | 'combo' | 'bread' | 'lightFood' | 'hotDessert' | 'coldDessert' | 'bebidas' | 'coffee' | 'packageFood';
