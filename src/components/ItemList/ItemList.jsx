import React from "react";
import Item from "../Item/Item";
import { Grid, Box } from "@chakra-ui/react";

const ItemList = ({ productList }) => {
	//const {productList}=props
	return (
		<>
			<h3>Productos:</h3>
			<Grid gap={2} autoFlow="row dense">
				<Box w="100%" h="auto">
					{productList.map((product) => (
						<Item key={product.id} product={product} />
					))}
				</Box>
			</Grid>
		</>
	);
};

export default ItemList;
