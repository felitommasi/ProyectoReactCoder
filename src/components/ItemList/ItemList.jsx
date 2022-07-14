import React from "react";
import Item from "../Item/Item";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";

const ItemList = ({ productList }) => {
	//console.log(productList);

	return (
		<Box p={[6, 8, 10, 12]}>
			<Center>
				<Text fontWeight="bold" fontSize="xl" mb="4">
					Productos
				</Text>
			</Center>

			<SimpleGrid minChildWidth="230px" spacing="1.5rem" justifyContent="center">
				{productList.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</SimpleGrid>

		</Box>
	);
};

export default ItemList;
