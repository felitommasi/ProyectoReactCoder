import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Text } from "@chakra-ui/react"

export const ItemListContainer = ({ greeting }) => {
    
    const onAdd = (quantity) => {
        console.log(`Añadiste ${quantity} unidades`);
    };
    
    return (
        <>
            <Text fontSize='2rem'>{greeting}</Text>
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </>
    );
};

export default ItemListContainer;