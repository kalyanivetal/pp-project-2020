import { INCREASE_QUANTITY, DECREASE_QUANTITY ,CLEAR_PRODUCT} from "./types";

export const productQuantity=(action,id)=>{
     return (dispatch)=>{
          console.log("Inside Product Qauntity");
          console.log("Action is",action);
          console.log("Product is",id);
          dispatch({
               type: action ==="increase" ? INCREASE_QUANTITY:DECREASE_QUANTITY,
               payload: id
          });

     }
}    

export const clearProduct=(id)=>{
     return (dispatch)=>{
          console.log("Inside Clear Product");
          console.log("Product is",id);
          dispatch({
               type: CLEAR_PRODUCT,
               payload: id
          });
      
     }
}    