import { CORE_CONCEPTS } from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

function App() {
    return (
        <div>
            <Header />
            <section id='core-concepts'>
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((el) => (
                        <CoreConcept title={el.title} image={el.image} description={el.description}></CoreConcept>
                    ))}
                </ul>
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
