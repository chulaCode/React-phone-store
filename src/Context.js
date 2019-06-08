import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';
//to use context api u need to create A NEW CONTEXT OBJECT
const ProductContext = React.createContext();

//provider

//consumer
class ProductProvider extends Component {
  state = {
    /*products: storeProducts,-> this way u pass by reference to the original data
    when modified it changes the origana data n the best option is to modified a copied
    object not the actual data 
    */
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  }
  //call setproduct function at initial dun of program
  componentDidMount() {
    this.setProducts();
  }
  //getting the copy of the data 
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => { return { products: tempProducts }; })
  }
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })

  };
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    //index is used to avoid product taking diff positions
    //any time is rendered
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProduct, cart: [...this.state.cart, product] };
    }, () => { this.addTotals() });
  }
  //for opening the model of a particular product when clicked
  //to add to cart
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    });
  }
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    });
  }
  increment=(id)=>{
    let tempCart=[...this.state.cart]
    const selectProduct=tempCart.find(item=>item.id===id);
 //getting the index so the position wouldn't be shifted rather
 //it will always maintain it's initial position
    const index=tempCart.indexOf(selectProduct);
    const product=tempCart[index];

    product.count=product.count+1;
    product.total=product.count*product.price;

    this.setState(()=>{
      return {cart:[...tempCart]}
    },()=>{this.addTotals();});
  }
  decrement=(id)=>{
    let tempCart=[...this.state.cart]
    const selectProduct=tempCart.find(item=>item.id===id);
 //getting the index so the position wouldn't be shifted rather
 //it will always maintain it's initial position
    const index=tempCart.indexOf(selectProduct);
    const product=tempCart[index];

    product.count=product.count-1;
    if(product.count===0)
    {
      this.removeItem(id);
    }else{
    product.total=product.count*product.price;

    this.setState(()=>{
      return {cart:[...tempCart]}
    },()=>{this.addTotals();});
  }
  }
  removeItem=(id)=>{
    //creatıng a new dıstructured array to keep temp prod n temp cart
 let tempProducts=[...this.state.products];
 let tempCart=[...this.state.cart];
 //filter serve the purpose of deletion
 tempCart=tempCart.filter(item=>item.id!==id);
 
 const index=tempProducts.indexOf(this.getItem(id));
 let removedProduct=tempProducts[index];
 removedProduct.inCart=false;
 removedProduct.count=0;
 removedProduct.total=0;

//putting the new values in the state
this.setState(()=> {
  return{
    cart:[...tempCart],
    products:[...tempProducts]
  };

},()=>{this.addTotals();});
  }
  clearCart=()=>{
  this.setState(()=>{
    return {cart:[]};
  },()=>{ this.setProducts();
  this.addTotals();});
  };
  
  addTotals=()=>{
    let subTotal=0;
    this.state.cart.map(item=>(subTotal+=item.total));
    const tempTax=subTotal*0.05;
    //toFixed(2) indicate 2 decimal place
    const Tax=parseFloat(tempTax.toFixed(2));
    const total=subTotal+Tax
    this.setState(()=>{
      return {
        cartSubTotal:subTotal,
        cartTax:Tax,
        cartTotal:total
      };
    })

  }
  
  render() {
    return (

      <ProductContext.Provider value={{
        //destructuring like slice to create a copy of the array
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart,
        addTotals:this.addTotals
       

      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
