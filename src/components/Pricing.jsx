import Plancard from "./Plancard";
function Pricing() {
    return (
        <section className="pricing">
        <h1 >Pricing Plans</h1>
        <p>choose a plan that work best for you</p>
        <div className="plans">
            <Plancard
                name="Basic"
                price="$9.99/month"
                features={["single user", "5GB storage", "email support"]}
            />
            <Plancard
                name="Pro"
                price="$19.99/month"
                features={["up to 5 users", "50GB storage", "priority email support"]}
                
            />
            <Plancard
                name="Enterprise"
                price="$49.99/month"
                features={["unlimited users", "200GB storage", "24/7 phone support"]}
            />
        </div>
        </section>
    );
}
export default Pricing;
