import React,{ Fragment } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import Pic1 from "../images/5_2.jpg";
import Pic2 from "../images/1_2.jpg";
import Pic3 from "../images/6_2.jpg";
import Pic4 from "../images/7_2.jpg";
import { productQuantity ,clearProduct } from "../actions/productQuantity";
function Cart({ basketProps , productQuantity, clearProduct }) {
     console.log(basketProps);

     let productsIncart=[];

     Object.keys(basketProps.products).forEach(function(item){
          console.log(item);
          console.log(basketProps.products[item].inCart);
          if(basketProps.products[item].inCart){
               productsIncart.push(basketProps.products[item]);
          }
          console.log(productsIncart);
     });

     //const productImages=[Pic1,Pic2,Pic3,Pic4];
     const productImages=(product)=>{
          if(product.id===1)
               return Pic1;
          else if(product.id===2)
               return Pic2;
          else if(product.id===3)
               return Pic3;
          else if(product.id===4)
               return Pic4;
     }

     productsIncart=productsIncart.map((product,index)=>{

          console.log("my Prod");
          console.log(product);
          return(
               <Fragment key={index}>
                    <div className="product">
                         <ion-icon onClick={()=>clearProduct(product.id)}
                         name="close-circle" color="danger">
                         </ion-icon>
                         <img src={productImages(product)} />
                         <span className="sm-hide">{product.name}</span>
                    </div>
                    <div className="price sm-hide">${product.price}.00</div>
                    <div className="quantity">
                         <ion-icon onClick={()=>productQuantity("decrease",product.id)}
                          className="decrease" name="remove-circle-outline">
                         </ion-icon>
                         <span>{product.numbers}</span>
                         <ion-icon onClick={()=>productQuantity("increase",product.id)}
                         className="increase" name="add-circle-outline">
                         </ion-icon>
                    </div>
                    <div className="total">${product.numbers*product.price}.00</div>
               </Fragment>
          )
     })

     return (
          <div className="container-products">
               <div className="product-header">
                    <h4 className="product-title">PRODUCT</h4>
                    <h4 className="price sm-hide">PRICE</h4>
                    <h4 className="quantity">QUANTITY</h4>
                    <h4 className="total">Total</h4>
               </div>
               <div className="products">
                    {productsIncart}
               </div>
               <div className="basketTotalContainer">
               <h3 className="basketTotalTitle">BasketTotal</h3>
               <h3 className="basketTotal">$ {basketProps.cartCost}</h3>
               </div>
          </div>
          );
}
const mapStateToProps=state=>({
     basketProps:state.basketState
});

export default connect(mapStateToProps,{ productQuantity , clearProduct})(Cart);
