import {useState } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = (props) =>{
    setCartIsShown(true);
  }
  const closeCartHandler = (props) =>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={showCartHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
