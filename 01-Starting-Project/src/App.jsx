import image from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={image} alt='Stylized atom' />
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}

function CoreConcept({ title, image, description }) {
    return (
        <li>
            <img src={image} title={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

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
