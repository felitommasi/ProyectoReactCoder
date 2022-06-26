import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { VStack } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";


function App() {
	return (
			<div className="App">
				<NavBar />

				<VStack>
					<ItemListContainer greeting="Bienvenido a mi ecommerce" />
				</VStack>
			</div>
	);
}

export default App;
