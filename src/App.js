import HomeScreen from "./components/home/HomeScreen";
import DrinkFinderProvider from "./context/drinkFinder/drinkFinderProvider";
import UiProvider from "./context/ui/uiProvider";

function App() {
    return (
        <div className="App">
            <DrinkFinderProvider>
                <UiProvider>
                    <HomeScreen />
                </UiProvider>
            </DrinkFinderProvider>
        </div>
    );
}
export default App;
