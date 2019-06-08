import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
//import Product from './Product';
export default class  extends Component {
  render() {
    return (
     <ProductConsumer>
       {value=>{
         const {id,company, info, img,price, title, inCart}=
         value.detailProduct;
         return(
           <div className="container py-5">
              {/*title*/}
              <div className="row">
                 <div className="col-10 mx-auto text-center text-slanted
                   text-blue my-5">
                    <h1>{title}</h1>
                  </div>
               </div>
               {/*end of title*/}
               {/*displaying product info*/}
               <div className="row">
                   <div className="col-10 mx-auto col-md-6 my-2">
                   <img src={img} className="img-fluid" alt="product"/>
                   </div>
                   <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                     <h3>model:{title}</h3>
                     <h4 className="text-title text-uppercase text-muted
                     mt-3 mb-2"> made by:<span className="text-uppercase">
                      {company}</span></h4>
                      <h4 className="text-blue"><strong>price: ${price}</strong></h4>
                     <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product:</p>
                        <p className="text-muted lead">{info}</p>
                        {/*button*/}
                        <Link to="/">
                         <ButtonContainer> back to products</ButtonContainer>
                        </Link>
                        <ButtonContainer 
                        cart
                        disabled={inCart? true:false}
                        onClick={()=>{value.addToCart(id)
                          value.openModal(id);
                        }}>
                           {inCart ? "inCart" :"add to cart"}

                        </ButtonContainer>
                   </div>
               </div>
             </div>  
         )
       }
      }
       
     </ProductConsumer>
    );
      
  }
}
