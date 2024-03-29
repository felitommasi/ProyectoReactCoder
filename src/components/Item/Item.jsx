import React from "react";
import { Link } from 'react-router-dom';
import { Box, Text, Image, Button, Center, Spacer } from "@chakra-ui/react";


const Item = ({ product }) => {
	const { title, description, image, id } = product;

	return (
		<Box display="flex" flexDirection="column" boxShadow="md" maxW="270px" rounded="4px" h="auto" overflow="hidden" bg="gray.50">
			<Box h="200" w={"100%"} align={"top"} overflow="hidden" bg="white">
				<Image align="center" src={image} fallbackSrc="https://via.placeholder.com/300" objectFit='cover'/>
			</Box>
			<Spacer />
			<Box maxH="80px">
				<Text pt={5} px={5} fontSize="lg" fontWeight="semibold" noOfLines={1}>
					{title}
				</Text>
			</Box>
			<Spacer />
			<Box h="100px" overflow="hidden">
				<Text px={5} py={3} fontSize="sm" noOfLines={4}>
					{description}
				</Text>
			</Box>
			<Spacer />
			<Center h="90px">
				<Link to={`/detail/${id}`}>
					<Button colorScheme="teal" my={4}>	
						See More
					</Button>
				</Link>
			</Center>
		</Box>
	);
};

export default Item;
