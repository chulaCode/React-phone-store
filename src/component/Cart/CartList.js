import React from 'react'
import CartItem from './CartItem';
export default function CartList({ value }) {
  const { cart } = value;
 // console.log(value, cart);
  return (
    <div className="container-fluid">
      {cart.map(item => {
        // eslint-disable-next-line no-lone-blocks
        {/*i passe two values item which holdsa the individaul items like id, img etc and value whic holds the methods*/}
        return <CartItem key={item.id} item={item} value={value} />
      })}

    </div>
  )
}
