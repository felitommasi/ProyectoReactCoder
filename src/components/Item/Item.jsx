import React from "react";
import { Box, Text, Image, Button, Center } from "@chakra-ui/react";


const Item = ({ product }) => {
	console.log(product);
	const { title, description, image } = product;

	return (
		<Box boxShadow="md" minW="270px" maxW="400px" rounded="4px" h="auto" overflow="hidden" bg="gray.100">
			{/*  reemplazar imagen */}
			<Box h="300" w={"100%"} align={"center"} overflow="hidden">
				<Image src={image} fallbackSrc="https://via.placeholder.com/230" />
			</Box>
			<Box>
				<Text p={5} fontSize="lg" fontWeight="semibold">
					{title}
				</Text>
			</Box>
			<Box>
				<Text p={5} fontSize="sm">
					{description}
				</Text>
			</Box>
			<Center>
				<Button p={5} mb={6} colorScheme='twitter'>Ver Detalle</Button>
			</Center>

		</Box>
	);
};

export default Item;
