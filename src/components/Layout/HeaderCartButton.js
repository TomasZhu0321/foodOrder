import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((pre,item)=>{return pre + item.amount},0);
  return(
  <button className={classes.button} onClick={props.onOpen}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
  )
};

export default HeaderCartButton;
