import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conseptItem) => (
              <CoreConcepts  {...conseptItem}></CoreConcepts>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isClicked={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isClicked={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isClicked={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isClicked={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>

          {!selectedTopic && (
            <p>Please select a topic you want to unserstand.</p>
          )}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
