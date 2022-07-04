import React from 'react';
import { Icon } from '@chakra-ui/react'
import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => { 
    return (
        < >
            <button className="CartBtn" >
                <Icon as={MdShoppingCart} w={7} h={7} />
            </button>
        </>
    );
};

export default CartWidget;