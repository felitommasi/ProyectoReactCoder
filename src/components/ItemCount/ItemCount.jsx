import React, { useState, useEffect } from 'react';
import { Button, HStack, VStack } from '@chakra-ui/react'
import { MdShoppingCart } from "react-icons/md";

export const  ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
      <VStack>
      
      <HStack spacing='32px' mb='16px'>
        <Button disabled={count <= 0} onClick={decreaseCount} colorScheme='gray'>-</Button>
          <span>{count}</span>
        <Button disabled={count >= stock} onClick={increaseCount} colorScheme='gray'>+</Button>
      </HStack>
   
        <div>
          <Button rightIcon={<MdShoppingCart/>} disabled={stock <= 0} onClick={() => onAdd(count)} colorScheme='blue'>Agregar al carrito</Button>
        </div>
      
      </VStack>
    );
};

export default ItemCount;