import React from "react";
import Item from "../Item/Item";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";

const ItemList = ({ productList }) => {
	//const {productList}=props
	return (
		<Box p={[2, 4, 6, 8]}>
			<Center>
				<Text fontWeight="bold" fontSize="xl" mb="4">
					Productos
				</Text>
			</Center>

			<SimpleGrid minChildWidth="230px" spacing="40px">
				{productList.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ItemList;
