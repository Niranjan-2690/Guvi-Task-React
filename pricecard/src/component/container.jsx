

function PriceCardContainer(props){
    let differentFeatures = {FREE: ["Single User"],
                       PLUS: ["5 Users"],
                       PRO: ["Unlimited Users"]
    }
    const commonFeatures = [
        { text: "50GB Storage", show: true },
        { text: "Unlimited Public Projects", show: true },
        { text: "Community Access", show: true },
        { text: "Unlimited Private Projects", show: true },
        { text: "Dedicated Phone Support", show: true },
        { text: "Free Subdomain", show: true },
        { text: "Monthly Status Reports", show: true }
    ];
    const featuresToShow = differentFeatures[props.plans];

    commonFeatures.filter((feature)=>feature.text === "Monthly Status Reports").show = false;

    
    return  <div className="container">
                <div className="plans">
                    <p>{props.plans}</p>
                    <h2>{props.price}</h2>
                </div>
                <hr/>
                <div className="features">
                    <ul className="ticks">
                        {featuresToShow.map((plansdiffer, index)=>(
                        <li key={index}>{plansdiffer}</li>)    
                        )}
                    </ul>
                    <ul>
                        {commonFeatures.map((commonfeature, index)=>(
                        <li key={index}>{commonfeature.text}</li>)    
                        )}
                    </ul>
                </div>
                <div className="btn">
                    <button>BUTTON</button>
                </div>
            </div>
}

export default PriceCardContainer;