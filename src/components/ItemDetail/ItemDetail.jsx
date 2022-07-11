import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Button,
	Flex,
	VStack,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
} from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
	const [buyFinalized, setBuyFinalized] = useState(false);
	const { addProduct } = useContext(CartContext);

	const onAdd = (count) => {
		addProduct({ ...product, qty: count });
		setBuyFinalized(true);
	};

	return (
		<>
			<Container maxW={"7xl"}>
				<SimpleGrid
					columns={{ base: 1, lg: 2 }}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 18, md: 24 }}
				>
					<Flex>
						<Image
							src={product.image}
							alt={"product image"}
							overflow={"hidden"}
							align={"center"}
							w={"auto"}
							h={{ base: "100%", sm: "400px", lg: "500px" }}
						/>
					</Flex>

					<Stack spacing={{ base: 6, md: 10 }}>
						<Box as={"header"}>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
								mb={4}
							>
								{product.title}
							</Heading>
							<Text
								color={useColorModeValue("gray.900", "gray.400")}
								fontWeight={300}
								fontSize={"2xl"}
							>
								$ {product.price}
							</Text>
						</Box>

						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={"column"}
							divider={
								<StackDivider
									borderColor={useColorModeValue("gray.200", "gray.600")}
								/>
							}
						>
							<VStack spacing={{ base: 4, sm: 6 }}>
								<Text fontSize={"lg"}>{product.description}</Text>
							</VStack>
							{buyFinalized ? (
								<Link to="/cart">
									<Button colorScheme="teal" my={4}>
										Finalizar Compra
									</Button>
								</Link>
							) : (
								<ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
							)}
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</>
	);
};

export default ItemDetail;
