import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {

  function handleClick() {
    console.log("Hello");
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick = {handleClick}>Components</TabButton>
            <TabButton onClick = {handleClick}>JSX</TabButton>
            <TabButton onClick = {handleClick}>Props</TabButton>
            <TabButton onClick = {handleClick}>State</TabButton>
          </menu>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
