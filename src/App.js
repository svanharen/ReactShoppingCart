
import './App.css';
import { useState } from 'react';

function App() {
  
  const products = ["Lentil", "Grain of Rice", "Black Bean", "Chocolate Chip", "Peppercorn"];
  const [cart, setCart] = useState([]);

  function makeForm(arr){
    const productItems = arr.map((item, i) => 
    <option key={i}>{item}</option>);
    return <>
      {productItems}
    </>
  }
  var productInputCounts = {
  }
  function changeToMulti(arr, product){

   let idx = arr.indexOf(product);
   arr[idx] = `${product} X2`
  }

 

  function addToCart(){
    const pToAdd = document.getElementById("product-form").value;
    console.log(pToAdd);
    const updatedCart = [ ...cart];
    updatedCart.includes(pToAdd) ? changeToMulti(updatedCart, pToAdd) : updatedCart.push(pToAdd);
    setCart(updatedCart);
  }

  function showCart(arr){
    if(!arr || arr.length == 0) {
      return <p>Add some items</p>
    }
    else{
      const listItems = arr.map((item, i) => 
      <li key={i}>{item}</li>);
      return <ul>{listItems}</ul>
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <main>
      <section className="shopping-cart-form">
  
        <label htmlFor="product-form">Products: </label>
          <select name="Products" id="product-form">
            {makeForm(products)}
          </select>
        <button onClick=
        {addToCart}>Add to Cart</button>
      
     </section>
     <div className="cart-items">
      <h2>Cart</h2>
      {showCart(cart)}
     </div>
      </main>
    </div>
  );
}

export default App;
