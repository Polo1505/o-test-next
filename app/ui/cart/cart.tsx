'use client';
import { useRef, useState } from 'react';
import { useStore } from '@/app/lib/store';
import { CartProps } from '@/app/lib/definitions';
import { MaskEventDetail, useMask } from '@react-input/mask';
import PopUp from '@/app/ui/popup';
import { createOrder } from '@/app/lib/data';

const Cart: React.FC<CartProps> = ({ items }) => {
  const [order, setOrder] = useState('');
  const [popUpOpen, setPopUpOpen] = useState(false);
  const phone = useStore((state) => state.phone);
  const updatePhone = useStore((state) => state.updatePhone);

  const [detail, setDetail] = useState<MaskEventDetail | null>(null);

  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
    onMask: (event) => {
      setDetail(event.detail);
    },
  });

  const handlePhoneInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    updatePhone(inputValue);
  };
  const handleOrderClick = async () => {
    if (!detail?.value || (detail?.input && !detail.isValid)) {
      return;
    }

    try {
      const orderData = await createOrder({ phone: phone, cart: items });
      orderData.success
        ? setOrder('Заказ успешно выполнен')
        : setOrder(orderData.error);
    } catch (error) {
      console.error('Order creation failed:', error);
    }
    setPopUpOpen(true);
  };

  return (
    <div className="cart  flex flex-col items-center rounded-[15px] max-w-[700px] bg-mygray-400 p-6 lg:mx-auto">
      <div>
        <h2 className="cart-title mb-4 text-center text-2xl text-[36px] font-bold">
          Добавленные товары
        </h2>
        <ul className="cart-items list-none p-0 ">
          {items.map((item, index) => (
            <div key={index} className="cart-item grid grid-flow-row grid-cols-6">
                <span className="cart-item-name col-span-4 mr-[50px] block text-[24px]">
                  {item.name}
                </span>
                <span className="cart-item-price col-span-2 block text-[24px]">
                  x{item.quantity + ' ' + item.quantity * item.price}₽
                </span>
            </div>
          ))}
        </ul>
      </div>
      <div className="cart-inputs mt-4 flex flex-col items-center justify-between gap-4 lg:flex-row">
        <input
          type="tel"
          ref={inputRef}
          className={`h-[68px] rounded-[15px] bg-mygray-600 text-[36px] text-mygray-300 ${
            detail?.input && !detail.isValid
              ? 'border-spacing-0 border-[5px] border-red-500'
              : ''
          }`}
          onChange={handlePhoneInputChange}
          value={phone}
        />

        <button
          className="cart-order-button h-[68px] w-full rounded-[15px] bg-mygray-600 px-4 py-1 text-[36px] text-mygray-300 hover:bg-mygray-500"
          onClick={handleOrderClick}
        >
          заказать
        </button>
        <PopUp trigger={popUpOpen} setTrigger={setPopUpOpen}>
          <h3>{order}</h3>
        </PopUp>
      </div>
    </div>
  );
};

export default Cart;
