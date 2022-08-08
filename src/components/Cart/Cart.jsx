import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import { Box, Button, Heading, Stack, HStack, Text } from "@chakra-ui/react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import Checkout from "../Checkout/Checkout";

function Cart() {
	const { qtyProducts, products, clearCart, totalPrice } = useContext(CartContext);

	return (
		<div>
			<Box
				maxW={{ 
					base: "3xl", 
					lg: "7xl" 
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
							You have {qtyProducts} products in your cart.
						</Heading>

						<Stack spacing="6">
							{products.map((item) => (
								<CartItem key={item.id} {...item} />
							))}
						</Stack>

						<HStack>
							{qtyProducts === 0 ? (
								<Link to="/">
									<Button colorScheme="teal" my={4}>
										Start shopping!
									</Button>
								</Link>
							) : (
								<Route path="/checkout" element={<Checkout />}>
									<Button colorScheme="teal" my={4}>
										Proceed to Checkout
									</Button>
								</Route>
							)}

							{products.length > 0 && (
								<Button colorScheme="gray" my={4} onClick={() => clearCart()}>
									Empty Cart
								</Button>
							)}
						</HStack>
						<Text fontWeight="bold">
							{totalPrice() === 0 ? (
								<p display="none" />
							) : (
								<p>Total: $ {totalPrice()}</p>
							)}
						</Text>
					</Stack>
				</Stack>
			</Box>
		</div>
	);
}

export default Cart;
