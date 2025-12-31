import styles from "./Pricing.module.css";
function Plancard({ name, price, features,hightlight }) {
    return (
        <div className={hightlight ? "cardactive": "card"}>
            <h2 >{name}</h2>
            <h3>{price}</h3>
            <p className={styles.price}>{price}/month</p>
            <ul>
                {features.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button>Choose Plan</button>
        </div>
    );
}
export default Plancard;

