import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
		<div className="App">
			<NavBar />
			<ItemListContainer/>	 	
      <ItemDetailContainer/>	
		{/* 	<ItemCount/>	 */}		
		</div>
  );
}

export default App;
