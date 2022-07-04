import React from "react";
import { Flex, HStack, chakra, Heading } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";

const navLinks = [
	{
		id: 1,
		label: "Home",
	},
	{
		id: 2,
		label: "About",
	},
	{
		id: 3,
		label: "Contact",
	},
];

const NavBar = () => {
	return (
		<chakra.header id="header" bg="brand.secondary">
			<Flex w="100%" px="6" py="5" align="center" justify="space-between">
				<Heading as="h3" size="lg">
					Manawa
				</Heading>

				<HStack as="nav" spacing="5">
					{navLinks.map((item) => (
						<a href="/" className="nav-link" key={item.id}>
							{item.label}
						</a>
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
