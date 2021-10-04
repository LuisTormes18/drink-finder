import HomeScreen from "./components/home/HomeScreen";
import DrinkFinderProvider from "./context/drinkFinder/DrinkFinderProvider";

function App() {
    return (
        <div className="App">
            <DrinkFinderProvider>
                    <HomeScreen />
            </DrinkFinderProvider>
        </div>
    );
}
export default App;
