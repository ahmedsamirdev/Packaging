import "./Aboutus.module.css";

function Aboutus() {
  return (
    <>
      <div className="aboutus_container">
        <div className="aboutus_left">
          {/* <img src="/aboutus_bg.png" alt=""/> */}
          <img src="/aboutus_left.png" alt=""/>
        </div>
        <div className="aboutus_right">
          <div className="aboutus_title">
            <img src="/whyus_leaf.png" alt="" />
            <h2>About us</h2>
          </div>
          <span className="aboutus_span">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem.
          </span>
          <h3>More .. </h3>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
