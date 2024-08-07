export default function CoreConcept({ title, image, description }) {
    return (
        <li>
            <img src={image} title={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
