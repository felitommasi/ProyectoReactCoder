import React, { useContext } from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

function Cart() {
	const { qtyProducts, products, clearCart, totalPrice } = useContext(
		CartContext
	);

	return (
		<div>
			<Box
				maxW={{
					base: "3xl",
					lg: "7xl",
				}}
				mx="auto"
				px={{
					base: "4",
					md: "8",
					lg: "12",
				}}
				py={{
					base: "6",
					md: "8",
					lg: "12",
				}}
			>
				<Stack
					direction={{
						base: "column",
						lg: "row",
					}}
					align={{
						lg: "flex-start",
					}}
					spacing={{
						base: "8",
						md: "16",
					}}
				>
					<Stack
						spacing={{
							base: "8",
							md: "10",
						}}
						flex="2"
					>
						<Heading fontSize="2xl" fontWeight="extrabold">
							Tenés {qtyProducts} productos en tu carrito
						</Heading>

						<Stack spacing="6">
							{products.map((item) => (
								<CartItem key={item.id} {...item} />
							))}
						</Stack>
					</Stack>

					<Button onClick={() => clearCart()}>Vaciar carrito</Button>
				</Stack>
				<Text fontWeight="medium">{totalPrice() === 0 ? <p display="none"/> : <p>Total: $ {totalPrice()}</p>}</Text>
			</Box>
		</div>
	);
}

export default Cart;
