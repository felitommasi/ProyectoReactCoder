import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { qtyProducts } = useContext(CartContext);

	return (
		<>
			<Stack direction="row" spacing={4}>
				<Link to="/cart">
					<Button
						leftIcon={<MdShoppingCart size={25}/>}
						colorScheme="teal"
						variant="solid"
						size="lg"
					>
					{qtyProducts === 0 ? <p display="none"/> : <p>{qtyProducts}</p>}
					</Button>
				</Link>
			</Stack>
		</>
	);
};

export default CartWidget;
