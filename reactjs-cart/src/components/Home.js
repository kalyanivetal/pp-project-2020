import React ,{useState}from "react";
import Pic1 from "../images/5_2.jpg";
import Pic2 from "../images/1_2.jpg";
import Pic3 from "../images/6_2.jpg";
import Pic4 from "../images/7_2.jpg";
import { connect }  from "react-redux";
import { addBasket } from "../actions/addAction";
const Home=(props)=>{
     console.log(props);
     /*const[ basketNumbers, setBasketNumbers]= useState(0);
     const addToBasket=()=>{
          //console.log("Button Clicked");
          setBasketNumbers(basketNumbers+1);
     }*/
     return(
     <div className="container">
          <div className="image">
               <img src={Pic1} alt=""/>
               <h4>Grey</h4>
               <h4>$25</h4>
               <a onClick={()=>props.addBasket(1)} className="addToCart cart1" href="#">Add to Cart</a>
          </div>
          <div className="image">
               <img src={Pic2} alt=""/>
               <h4>Grey</h4>
               <h4>$20</h4>
               <a onClick={()=>props.addBasket(2)} className="addToCart cart2" href="#">Add to Cart</a>
          </div>
          <div className="image">
               <img src={Pic3} alt=""/>
               <h4>Grey</h4>
               <h4>$15</h4>
               <a onClick={()=>props.addBasket(3)} className="addToCart cart3" href="#">Add to Cart</a>
          </div>
          <div className="image">
               <img src={Pic4} alt=""/>
               <h4>Grey</h4>
               <h4>$10</h4>
               <a onClick={()=>props.addBasket(4)} className="addToCart cart4" href="#">Add to Cart</a>
          </div>
     </div>
     );
}

export default connect(null,{addBasket})(Home);
