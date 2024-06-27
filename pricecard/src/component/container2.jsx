 function PriceCardContainer(prop){

    const features = {FREE: [
        {text: "Single User", show: true},
        { text: "50GB Storage", show: true },
        { text: "Unlimited Public Projects", show: true },
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects", show: false },
        { text: "Dedicated Phone Support", show: false },
        { text: "Free Subdomain", show: false },
        { text: "Monthly Status Reports", show: false }
    ], PLUS: [
        {text: "5 Users", show: true},
        { text: "50GB Storage", show: true },
        { text: "Unlimited Public Projects", show: true },
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects", show: true },
        { text: "Dedicated Phone Support", show: true },
        { text: "Free Subdomain", show: true },
        { text: "Monthly Status Reports", show: false } 
    ], PRO: [
        {text: "Unlimited Users", show: true},
        { text: "50GB Storage", show: true },
        { text: "Unlimited Public Projects", show: true },
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects", show: true },
        { text: "Dedicated Phone Support", show: true },
        { text: "Free Subdomain", show: true },
        { text: "Monthly Status Reports", show: true }]}

const showFeatures = features[prop.plans]

    return  <div className="container">
                <div className="plans">
                    <p>{prop.plans}</p>
                    <h2>{prop.price}</h2>
                </div>
                <hr/>
                <div className="features">
                    <ul className="ticks">
                        {showFeatures.map((feature, index) => (
                            <li key={index} className={feature.show ? 'feature-show' : 'feature-hide'}>
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="btn">
                    <button>BUTTON</button>
                </div>
            </div>
}

 export default PriceCardContainer;