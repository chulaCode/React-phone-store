import React, { Component } from 'react'
import Title from './Title';
//import {storeProducts} from '../data';
import Product from './Product';
import { ProductConsumer } from '../Context';
import Footer from './Footer';
export default class ProductList extends Component {
  /* state={
     products: storeProducts
   };*/
  render() {
    return (

      //FRAGMENT IS MORE LIKE A CONTAINER DIV
      //To provide a more consistent authoring experience for fragments, React now provides a first-class Fragment component that can be used in place of arrays.
      //Support rendering child elements as arrays
      //py-5 means padding button n top
      <React.Fragment>

        <div className="py-5">

          <div className="container">
            <Title name="our" title="products" />
            <div className="row">

              <ProductConsumer>
                {
                  value => {
                    return value.products.map(product => {
                     
                      return <Product key={product.id}
                        Product={product}  />;
                        
                    })
                   // console.log(product)
                  }}
                     
              </ProductConsumer>
            </div>
          </div>
         
        </div>
        <Footer/>
        
        
      </React.Fragment>
    )
  }
}
