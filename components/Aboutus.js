import "./Aboutus.module.css";

function Aboutus() {
  return (
    <>
      <div className="aboutus_container">
        <div className="bg_container">
          <img src="/choose_leaf.webp" alt="" className="a-pattern"/>
          <div className="bg_aboutus">
            <img src="/aboutus_left.webp" alt="" className="aboutus_left" />
          </div>
        </div>
        <div className="desc_container">
          <div className="aboutus_title">
            <img src="/whyus_leaf.webp" alt="" />
            <h2>About us</h2>
          </div>
          <span className="aboutus_span">
            National Company for Packaging Industries was established in 1997,
            Our 1st Production was in 1999. Ibeeca is the market leader in
            Food & Beverage.
          </span>
          <h3>More .. </h3>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
