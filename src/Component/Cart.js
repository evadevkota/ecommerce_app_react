import React from 'react'

function Cart(props) {
 
  
  
  return (
   <div class = "Container">
      
        <div class="container">
            <div id="root"></div>
            <div class="sidebar">
                <div class="head"><p>My Cart</p></div>
                <div id="cartItem">Your cart is empty</div>
                <div class="foot">
                    <h3>Total</h3>
                    <h2 id="total">{props.price}</h2>
                </div>
            </div>
        </div>
    </div>
  )

  }

export default Cart
