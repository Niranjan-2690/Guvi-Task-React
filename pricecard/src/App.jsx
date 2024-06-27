import PriceCardContainer from "./component/container2.jsx";


function PriceCard(){
  return  <div className="cards">
                <PriceCardContainer plans="FREE" price="$0/month"/>
                <PriceCardContainer plans="PLUS" price="$9/month"/>
                <PriceCardContainer plans="PRO" price="$49/month"/>
          </div>
}

export default PriceCard;