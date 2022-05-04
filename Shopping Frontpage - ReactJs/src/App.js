
import './App.css';
import { useState, useEffect } from "react";

import products from './products.json';
var shopping = 0;
function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cart, setcartCount] = useState("");
  const [amount, setamountCount] = useState(0);
  return (
    <>
    <div className="bar">
      <div className="barlogo" onClick={() => {alert("test")}}>
        <img src="https://cdn.discordapp.com/emojis/737939809271808082.gif?size=64" ></img>
      </div>
    <div className="barhead">Discord Bot Store - Perfect place to buy Bots</div>
    <div className="barcart">
        <img src="https://cdn.discordapp.com/emojis/830084427732090880.png?size=32"></img>
      </div>
      <div className="barred">{itemCount}</div>
    </div>
    <div className="grid">
      {products.map(product => {
        return (
          <div key={product.id} className="card">
            <a href={product.image}><img src={product.image}></img></a>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Rs {product.price}</p>
            <p>
            <button onClick={() => {
              setItemCount(itemCount + 1);
              setcartCount(cart+`${product.title} - Rs ${product.price}\n`);
              setamountCount(amount+product.price);
              alert(`${product.title} - Rs ${product.price}\n${cart}--------------------------------------------------------------------------------\nTotal Amount - Rs ${amount+product.price}`);
            }}
>
  Add to Cart
</button>
            </p>
          </div>
        );
      })}
    </div>
    <div className="bart"><div className="bartail">Made with ReactJS with ❤️</div></div>
    </>
  );
}

export default App;
