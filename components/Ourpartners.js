import "./Ourpartners.module.css";

function Ourpartners() {
  return (
    <>
      <div className="ourpartners_title">
        <img src="/whyus_leaf.png" alt="" />
        <h2>Our partners</h2>
      </div>

      <div className="partners_logos">
        <img src="/partner1.png" alt="" /> <div className="vl"></div>
        <img src="/partner2.png" alt="" /> <div className="vl"></div>
        <img src="/partner3.png" alt="" /> <div className="vl"></div>
        <img src="/partner4.png" alt="" /> <div className="vl"></div>
        <img src="/partner5.png" alt="" /> <div className="vl"></div>
        <img src="/partner6.png" alt="" />
      </div>

      <div className="ourpartners_slider">
        <div className="slider">
          <img src="/partner1.png" alt="" />
          <img src="/partner2.png" alt="" />
          <img src="/partner3.png" alt="" />
          <img src="/partner4.png" alt="" />
          <img src="/partner5.png" alt="" />
          <img src="/partner6.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Ourpartners;
