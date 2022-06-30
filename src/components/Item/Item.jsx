import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import ItemCount from '../ItemCount/ItemCount';


const onAdd = (quantity) => {
    console.log(`Añadiste ${quantity} unidades`);
};

const Item = ({product}) => {
	console.log(product);
    const { name, description } = product;
    
    return (
		<Box boxShadow="md" rounded="4px" w="230px" overflow="hidden" bg="gray.100">
			{/*  reemplazar imagen */}
			<Image src={Image} fallbackSrc="https://via.placeholder.com/230" />
            <Text fontSize="md">{name}</Text>
            <Text fontSize="sm">{description}</Text>
			<Box p={5} mb={2}>
                <ItemCount initial={0} stock={10} onAdd={onAdd} />
			</Box>
		</Box>
	);
};

export default Item;