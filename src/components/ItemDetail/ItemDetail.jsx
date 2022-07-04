import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
} from "@chakra-ui/react";

const onAdd = (quantity) => {
	console.log(`Añadiste ${quantity} unidades`);
};

const ItemDetail = ({ product }) => {
	const productDetail = product[2];
	console.log(productDetail);
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
							src={productDetail.image}
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
								{productDetail.title}
							</Heading>
							<Text
								color={useColorModeValue("gray.900", "gray.400")}
								fontWeight={300}
								fontSize={"2xl"}
							>
								${productDetail.price}
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
								<Text fontSize={"lg"}>{productDetail.description}</Text>
							</VStack>
							<ItemCount initial={0} stock={10} onAdd={onAdd} />
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</>
	);
};

export default ItemDetail;
