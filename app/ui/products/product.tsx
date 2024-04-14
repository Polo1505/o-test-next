'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useStore } from '@/app/lib/store';

import { ProductItem } from '@/app/lib/definitions';

export default function Product(props: ProductItem) {
  const [quantity, setQuantity] = useState<number>(props.quantity || 0);
  const addCartItem = useStore((state) => state.addCartItem);
  const deleteCartItem = useStore((state) => state.deleteCartItem);
  const changeQuantity = useStore((state) => state.changeQuantity);

  function handleBuyClick() {
    setQuantity(1);
    addCartItem({
      id: props.id,
      name: props.title,
      price: props.price,
      quantity: 1,
    });
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = Number(event.target.value);
    changeQuantity(props.id, newQuantity);
    if (newQuantity === 0) deleteCartItem(props.id);
    setQuantity(newQuantity);
  }

  function handleRemoveClick() {
    const newQuantity = quantity - 1;
    changeQuantity(props.id, newQuantity);
    if (newQuantity === 0) deleteCartItem(props.id);
    setQuantity(newQuantity);
  }

  function handleAddClick() {
    const newQuantity = quantity + 1;
    changeQuantity(props.id, newQuantity);
    setQuantity(newQuantity);
  }

  const productName =
    props.title.length > 12
      ? props.title.substring(0, 12) + '...'
      : props.title;
  const productDesc =
    props.description.length > 100
      ? props.description.substring(0, 100) + '...'
      : props.description;

  return (
    <div className="relative min-w-xs max-w-md rounded-[15px] bg-mygray-400 w-full" ref={props.innerRef}>
      <Image
        className="product-header w-full rounded-[15px] pt-[10px] px-[10px]"
        src={props.image_url}
        alt={props.title}
        width={300}
        height={400}
      />
      <div className="product-body flex flex-col items-center px-5">
        <h2 className=" text-[36px] text-mygray-600 ">{productName}</h2>
        <p className="text-[24px] font-normal text-mygray-500">
          {productDesc}
        </p>
        <h2 className="text-center text-[36px] mb-[94px]">цена: {props.price}₽</h2>
      </div>
      <div className="product-footer absolute bottom-0 mt-auto p-[10px] items-center w-full">
          {quantity === 0 ? (
            <button
              className=" h-16 w-full rounded-[15px] bg-mygray-600 text-[36px] text-mygray-300 hover:bg-mygray-500"
              onClick={handleBuyClick}
            >
              купить
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <button
                className=" h-16 w-full rounded-[15px] bg-mygray-600 text-[36px] text-mygray-300 hover:bg-mygray-500"
                onClick={handleRemoveClick}
              >
                -
              </button>
              <input
                type="number"
                className=" h-16 w-full rounded-[15px] bg-mygray-600 text-[36px] text-mygray-300"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                className=" h-16 w-full rounded-[15px] bg-mygray-600 text-[36px] text-mygray-300 hover:bg-mygray-500"
                onClick={handleAddClick}
              >
                +
              </button>
            </div>
          )}
        </div>
    </div>
  );
}
