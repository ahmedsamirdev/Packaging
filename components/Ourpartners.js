import "./Ourpartners.module.css";

function Ourpartners() {
  return (
    <>
      <div className="ourpartners_title">
        <img src="/whyus_leaf.webp" alt="" />
        <h2>Our partners</h2>
      </div>

      <div className="partners_logos">
        <img src="/partner1.webp" alt="" /> <div className="vl"></div>
        <img src="/partner2.webp" alt="" /> <div className="vl"></div>
        <img src="/partner3.webp" alt="" /> <div className="vl"></div>
        <img src="/partner4.webp" alt="" /> <div className="vl"></div>
        <img src="/partner5.webp" alt="" /> <div className="vl"></div>
        <img src="/partner6.webp" alt="" />
      </div>

      <div className="ourpartners_slider">
        <div className="slider">
          <img src="/partner1.webp" alt="" />
          <img src="/partner2.webp" alt="" />
          <img src="/partner3.webp" alt="" />
          <img src="/partner4.webp" alt="" />
          <img src="/partner5.webp" alt="" />
          <img src="/partner6.webp" alt="" />
        </div>
      </div>
    </>
  );
}

export default Ourpartners;
