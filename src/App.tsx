import Filters from "./components/Filters";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <Header />
      {/* Main */}
      <main>
        <Summary />
        <Filters />
        <Transactions />
      </main>
    </>
  );
}

export default App;
