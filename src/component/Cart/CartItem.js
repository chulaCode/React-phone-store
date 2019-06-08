import React from 'react'
//getting the two props passed in productlist
//point to note i'm passing props by value not with a context api
export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2 ">
        <img src={img}
          style={{ width: "5rem", height: "5rem" }} className="img-fluid"
          alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {/*on a large screen don't display this*/}
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {/*on a large screen don't display this*/}
        <span className="d-lg-none">price :</span>
        $ {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-ccenter">
          <div className="mx-auto">
            <span className="btn btn-black mx-1" onClick={() =>
              decrement(id)}> - </span>
            <span className=" btn btn-black mx-2">{count}</span>
            <span className="btn btn-black mx-1" onClick={() =>
              increment(id)}> + </span>
          </div>
        </div>

      </div>
      {/* end of button div*/}
      <div className="col-10 mx-auto col-lg-2">
       <div className="cart-icon" onClick={()=>removeItem(id)}>
       <i className="fas fa-trash"></i>
       </div>
      </div>
      
      <div className="col-10 mx-auto col-lg-2">
      <strong> item total : $ {total}</strong>
      </div>
      
    </div>
  )
}
