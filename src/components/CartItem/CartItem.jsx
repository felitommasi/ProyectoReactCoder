import React, { useContext } from "react";
import {
	IconButton,
	Box,
	Text,
	Image,
	Stack,
	Flex,
	Divider,
	useColorModeValue as mode,
	Spacer,
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

							<Text color={mode("gray.600", "gray.400")} fontSize="sm" mb={3}>
								Cantidad: {product.qty}
							</Text>

							<Spacer />
							<Text fontWeight="medium">
								sub-total: $ {product.qty * price}
							</Text>
						</Stack>
					</Box>
					<Spacer />
					<IconButton
						icon={<MdOutlineClose />}
						aria-label={`Delete ${title} from cart`}
						colorScheme="teal"
						variant="solid"
						size="lg"
						onClick={() => removeProduct(id)}
					/>
				</Stack>
			</Flex>
			<Divider />
		</>
	);
};

export default CartItem;
