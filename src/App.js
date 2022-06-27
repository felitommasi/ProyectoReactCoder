import { VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

function App() {
	return (
		<div className="App">
			<NavBar />

			<VStack>
				<Card />
			</VStack>
		</div>
	);
}

export default App;
