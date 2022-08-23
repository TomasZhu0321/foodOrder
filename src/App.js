import { Fragment, useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = (props) =>{
    setCartIsShown(true);
  }
  const closeCartHandler = (props) =>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={showCartHandler}/>
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
