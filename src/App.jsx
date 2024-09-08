import Header from "./components/Header";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
