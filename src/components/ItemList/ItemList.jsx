import React from "react";
import Item from "../Item/Item";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";

const ItemList = ({ productList }) => {
	return (
		<Box p={[6, 8, 10, 12]}>
			<Center>
				<Text
					fontWeight="bold"
					fontSize={{ base: "2rem", md: "2.5rem", lg: "2.7rem" }}
					mb="5rem"
					align="center"
				>
					Amazing e-commerce platform <br/> for everyone 
				</Text>
			</Center>

			<SimpleGrid
				minChildWidth="230px"
				spacing="1.5rem"
				justifyContent="center"
			>
				{productList.map((product) => (
					<Item key={product.id} product={product} />
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ItemList;
