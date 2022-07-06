import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, HStack, chakra, Heading } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";

const navLinks = [
	{
		id: 1,
		path: "/",
		name: "Home",
	},
	{
		id: 2,
		path: "/category/men's clothing",
		name: "Men's clothing",
	},
	{
		id: 3,
		path: "/category/jewelery",
		name: "Jewelery",
	},
];

const NavBar = () => {
	let activeStyle = {
		textDecoration: "underline",
	};

	return (
		<chakra.header id="header" bg="brand.secondary">
			<Flex w="100%" px="6" py="5" align="center" justify="space-between">
				<Heading as="h3" size="lg" color="white">
					Manawa
				</Heading>

				<HStack as="nav" spacing="10" color="white" fontWeight="bold">
					{navLinks.map((category) => (
						<NavLink
							to={category.path}
							key={category.id}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{category.name}
						</NavLink>
					))}
				</HStack>

				<div>
					<CartWidget />
				</div>
			</Flex>
		</chakra.header>
	);
};

export default NavBar;
