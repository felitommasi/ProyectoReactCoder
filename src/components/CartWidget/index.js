import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import "./styles.css";

const CartWidget = () => { 
    return (
        < >
            <button className="CartBtn">
                <MdShoppingCart className="CartIcon"/>
            </button>
        </>
    );
};

export default CartWidget;