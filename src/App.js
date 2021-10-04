import DrinkFinderProvider from "./context/drinkFinder/drinkFinderProvider";
import UiProvider from "./context/ui/uiProvider";

function App() {
    return (
        <div className="App">
            <DrinkFinderProvider>
                <UiProvider>
                    <h1>Mi App</h1>
                </UiProvider>
            </DrinkFinderProvider>
        </div>
    );
}
export default App;
