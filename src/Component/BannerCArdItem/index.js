import "./index.css"

const BannerCArdItem  = props=>{
    const { BannerCardDetails}= props;
    const {headerText,description,className} =  BannerCardDetails;

  return(
    <li className={className}>
      <div className="list-container">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">See More</button>
      </div>
    </li>
  )
}


export default BannerCArdItem;

