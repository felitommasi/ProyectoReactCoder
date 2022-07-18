import React, { useContext } from "react";
import {
	IconButton,
	Box,
	Text,
	Image,
	Stack,
	Flex,
	Link,
	Divider,
	useColorModeValue as mode,
} from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

const CartItem = (product) => {
	const { removeProduct } = useContext(CartContext);
	const { title, image, id, price } = product;

	return (
		<>
			<Divider />
			<Flex
				direction={{
					base: "column",
					md: "row",
				}}
				justify="space-between"
				align="center"
			>
				<Stack direction="row" spacing="5" width="full">
					<Image
						rounded="lg"
						width="120px"
						height="120px"
						fit="cover"
						src={image}
						alt="imagen producto {title}"
						draggable="false"
						loading="lazy"
					/>
					<Box pt="4">
						<Stack spacing="0.5">
							<Text fontWeight="medium">{title}</Text>
							<Text color={mode("gray.600", "gray.400")} fontSize="sm">
								Cantidad: {product.qty}
							</Text>
						</Stack>
					</Box>
				</Stack>

				{/* Desktop */}
				<Flex
					width="full"
					justify="space-between"
					display={{
						base: "none",
						md: "flex",
					}}
				>
					<Text fontWeight="medium">sub-total: $ {product.qty * product.price}</Text>

					<IconButton
						icon={<MdOutlineClose />}
						aria-label={`Delete ${title} from cart`}
						colorScheme="teal"
						variant="solid"
						size="lg"
						onClick={() => removeProduct(id)}
					/>
				</Flex>

				{/* Mobile */}
				<Flex
					mt="4"
					align="center"
					width="full"
					justify="space-between"
					display={{
						base: "flex",
						md: "none",
					}}
				>
					<Link fontSize="sm" textDecor="underline">
						Delete
					</Link>

					<Text fontWeight="medium">{price}</Text>
				</Flex>
			</Flex>
			<Divider />
		</>
	);
};

export default CartItem;
