import React, { useContext } from "react";
import { Button, Stack } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { qtyProducts } = useContext(CartContext);

	return (
		<>
			<Stack direction="row" spacing={4}>
				<Button leftIcon={<MdShoppingCart />} colorScheme="teal" variant="solid" size="lg">
					{qtyProducts}
				</Button>
			</Stack>
		</>
	);
};

export default CartWidget;
