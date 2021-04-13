import { ADD_PRODUCT_BASKET ,GET_NUMBERS_BASKET,INCREASE_QUANTITY,DECREASE_QUANTITY , CLEAR_PRODUCT } from "../actions/types";
//import { stat } from "fs/promises";
//import { stat } from "fs/promises";
const initialState={
     basketNumbers:0,
     cartCost:0,
     products:{
          1:{
               id:1,
               name:"Grey T Shirt",
               price: 25,
               numbers:0,
               inCart:false
          },
          2:{
               id:2,
               name:"Black T Shirt",
               price: 20,
               numbers:0,
               inCart:false
          },
          3:{
               id:3,
               name:"white T Shirt",
               price: 15,
               numbers:0,
               inCart:false
          },
          4:{
               id:4,
               name:"Blue T Shirt",
               price: 10,
               numbers:0,
               inCart:false
          }
     }
}
export default ( state=initialState , action)=>{
     let productSelected="";
     switch(action.type ){
     case ADD_PRODUCT_BASKET:
          productSelected={...state.products[action.payload]};
          console.log(productSelected);
          productSelected.numbers+=1;
          productSelected.inCart=true;
          console.log(productSelected);
               return{
                    ...state,
                    basketNumbers:state.basketNumbers+1,
                    cartCost: state.cartCost+state.products[action.payload].price,
                    products:{
                         ...state.products,
                         [action.payload]: productSelected
                    }
               }
          case GET_NUMBERS_BASKET:
               return{
                    ...state
               }
            
          case INCREASE_QUANTITY:
               productSelected={...state.products[action.payload]};
               console.log(productSelected);
               productSelected.numbers += 1;
               
          return{
                    ...state,
                    basketNumbers:state.basketNumbers + 1,
                    cartCost: state.cartCost + state.products[action.payload].price,
                    products: {
                         ...state.products,
                         [action.payload]: productSelected
                    }
               }

          case DECREASE_QUANTITY:
          let newCartCost=0;
          let newBasketNumbers=0;
          productSelected={...state.products[action.payload]};
          console.log(productSelected);

          if(productSelected.numbers===0){
               productSelected.numbers = 0;
               newCartCost=state.cartCost
               newBasketNumbers=state.basketNumbers
          }
          else{
               productSelected.numbers -= 1;
               newCartCost=   state.cartCost - state.products[action.payload].price;
               newBasketNumbers=state.basketNumbers - 1;
          }
          return{
               ...state,
               basketNumbers:newBasketNumbers,
               cartCost: newCartCost,
               products:{
                    ...state.products,
                    [action.payload]: productSelected
               }
          }
          case CLEAR_PRODUCT:
               productSelected= {...state.products[action.payload]};
               let numbersBackup=productSelected.numbers;
               productSelected.numbers=0;
               productSelected.inCart=false;
               return {
                    ...state,
                    basketNumbers:state.basketNumbers - numbersBackup,
                    cartCost:state.cartCost - (numbersBackup * productSelected.price),
                    products:{
                         ...state.products,
                         [action.payload]:productSelected
                    }
               }

     default:
          return state;
     }
}