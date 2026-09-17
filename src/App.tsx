import Filters from "./components/Filters";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Header />
      {/* Main */}
      <main>
        <Summary />
        <Filters />
      </main>
    </>
  );
}

export default App;
