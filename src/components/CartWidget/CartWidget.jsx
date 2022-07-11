import React, {useContext} from 'react';
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../../context/CartContext"; 

const CartWidget = () => { 

    const {qtyProducts} = useContext(CartContext);

    return (
        <>
            <button className="CartBtn">
                <Icon as={MdShoppingCart} w={8} h={8} color="white"/>
                <p>{qtyProducts}</p>
            </button>
        </>
    );
};

export default CartWidget;