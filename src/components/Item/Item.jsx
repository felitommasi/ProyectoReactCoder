import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (quantity) => {
	console.log(`Añadiste ${quantity} unidades`);
};

const Item = ({ product }) => {
	console.log(product);
	const { title, description, image } = product;

	return (
		<Box boxShadow="md" rounded="4px" w="230px" overflow="hidden" bg="gray.100">
			{/*  reemplazar imagen */}
			<Image src={image} fallbackSrc="https://via.placeholder.com/230" />
			<Text p={5} fontSize="md">
				{title}
			</Text>
			<Text p={5} fontSize="sm">
				{description}
			</Text>
			<Box p={5} mb={2}>
				<ItemCount initial={0} stock={10} onAdd={onAdd} />
			</Box>
		</Box>
	);
};

export default Item;
