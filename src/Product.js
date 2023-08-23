import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,title1,image,price,rating}) {

        const [{basket}, dispatch] = useStateValue();
    
        const addtoBasket = () => {
            dispatch({
                type: "ADD_TO_BASKET",
                item:{
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
        };
  return (
    <div className="product">

    <div class="card">

            <div class="img-box">
            <img src={image} alt=" " />
            </div>

            <div class="content">
                <h1>{title1}</h1>

                <p className="product_price">
                    <h2>{title}</h2>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product_rating">
                      {Array(rating).fill().map((_,i) =>(
                        <p>⭐</p>
                      ))}
                    </div>  
                </p>

                <button onClick={addtoBasket}> Add to Basket</button>
            </div>
        </div>



    </div>
  );
}

export default  Product;