import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcepts from './components/CoreConcepts';



function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcepts 
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}>
        </CoreConcepts>
        <CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>
        <CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>
        <CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>
        </ul>
      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
