import React from "react";
import { NavLink } from "react-router-dom";
import {
	useDisclosure,
	Flex,
	chakra,
	IconButton,
	Container,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Stack,
	Heading,
	VStack,
} from "@chakra-ui/react";
import { MdMenu, MdClose } from "react-icons/md";
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
	const { isOpen, onOpen, onClose } = useDisclosure();

	let activeStyle = {
		textDecoration: "underline",
	};

	return (
		<chakra.header
			w="100%"
			h="80px"
			px="6"
			py="5"
			top={0}
			bg="teal.500"
			position={"sticky"}
			zIndex={"modal"}
		>
			<Container height="full" maxW="container.xl">
				<Flex alignItems="center" height="full" justifyContent="space-between">
					<NavLink to="/" key="1">
						<Heading as="p" size="lg" color="white" fontWeight="bold">
							Shopful
						</Heading>
					</NavLink>
					<Stack
						direction="row"
						display={{ base: "none", lg: "flex" }}
						spacing={12}
						color="white"
						fontSize="lg"
						fontWeight="bold"
					>
						{navLinks.map((category) => (
							<NavLink
								to={category.path}
								key={category.id}
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								{category.name}
							</NavLink>
						))}
					</Stack>
					<Flex alignItems="center">
						<div>
							<CartWidget />
						</div>
						<IconButton
							_hover={{ cursor: "pointer" }}
							display={{ base: "flex", lg: "none" }}
							variant='outline'
							borderWidth={2}
							colorScheme="whiteAlpha"
							marginLeft={2}
							h={8}
							w={6}
							icon={<MdMenu />}
							onClick={onOpen}
						/>
					</Flex>
				</Flex>

				<Drawer isOpen={isOpen} placement="top" onClose={onClose}>
					<DrawerOverlay p={0} />
					<DrawerContent>
						<DrawerBody>
							<VStack mb={10} mt={4}>
								<IconButton
									_hover={{ cursor: "pointer" }}
									h={6}
									position="absolute"
									right={4}
									w={6}
									icon={<MdClose />}
									onClick={onClose}
								/>
								<Stack
									align="center"
									pt={10}
									spacing={10}
									colorScheme="teal"
									fontWeight="bold"
								>
									{navLinks.map((category) => (
										<NavLink
											to={category.path}
											key={category.id}
											style={({ isActive }) =>
												isActive ? activeStyle : undefined
											}
										>
											{category.name}
										</NavLink>
									))}
								</Stack>
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Container>
		</chakra.header>
	);
};

export default NavBar;
