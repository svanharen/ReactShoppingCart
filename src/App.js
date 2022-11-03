
import './App.css';
import { useState } from 'react';

function App() {
  
  const products = ["Lentil", "Grain of Rice", "Black Bean", "Chocolate Chip", "Peppercorn"];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  function makeForm(arr){
    const productItems = arr.map((item, i) => 
    <option key={i}>{item}</option>);
    return <>
      {productItems}
    </>
  }

  function addProductToCart(e){

    setTotal(total +1);

    var newItem = {name: document.getElementById("product-form").value, quantity: 1}
    console.log(newItem);
    const newCart = [ ...cart];
    var flag=0;
    console.log("newcart len: " + newCart.length);

    if(newCart.length < 1){

      newCart.push(newItem);
      setCart(newCart);
      console.log("first push")
    }
    else{
      newCart.forEach(element => {
        if(element.name === newItem.name){
          element.quantity +=1;
          console.log("quantity increased");
          setCart(newCart);
          flag = 1;
        }
      })
    if(flag !=1){
      newCart.push(newItem);
      setCart(newCart);
      flag=0;
      }
    }
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
      <li key={i}>{`${item.name} x ${item.quantity}`}</li>);
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
        {addProductToCart}>Add to Cart</button>
      
     </section>
     <div className="cart-items">
      <h2>Cart</h2>
      {showCart(cart)}
     </div>
     <div>
      <p>You have {total} items in your cart</p>
     </div>
      </main>
    </div>
  );
}

export default App;
