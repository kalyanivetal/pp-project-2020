import {ADD_PRODUCT_BASKET} from "./types" ; 

export const addBasket=(id)=>{
     return (dispatch)=>{
          console.log("Adding to Basket");
          console.log("Product is :",id);
          dispatch({
               type: ADD_PRODUCT_BASKET,
               payload: id
          });
     }
}