export interface IProduct {
  page: number;
  amount: number;
  total: number;
  items: Array<ProductItem>
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IMarketState {
  cartItems: Array<ICartItem>;
  phone: string;
  addCartItem: (item: ICartItem) => void;
  deleteCartItem: (id: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
  updatePhone: (newPhone: string) => void;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
}

export interface CartProps {
  items: Array<ICartItem>;
}

export interface IReviewProps{
  id: number,
  text: string
}

export interface ProductItem {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  innerRef?: React.Ref<HTMLParagraphElement>;
}
export interface IProductsParams {
  page: number;
  page_size: number;
}

export interface IOrderBody {
  phone: string;
  cart: Array<ICartItem>
}

export interface IPopUpProps{
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}