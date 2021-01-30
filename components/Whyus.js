import "./Whyus.module.css";

function Whyus() {
  return (
    <>
    <div className="whyus_wrapper">
      <div className="whyus_title">
          <img src="/whyus_leaf.png" alt=""/>
        <h2>Why us</h2>
      </div>
      <div className="whyus-flex">
        <div className="whyus_container">
          <img src="/whyus_1.png" alt="" />
          <h4>High quality materials</h4>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially
          </p>
        </div>
        <div class="vl"></div>

        <div className="whyus_container">
          <img src="/whyus_2.png" alt="" />
          <h4>High quality materials</h4>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially
          </p>
        </div>
        <div class="vl"></div>

        <div className="whyus_container">
          <img src="/whyus_3.png" alt="" />
          <h4>High quality materials</h4>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially
          </p>
        </div></div>
      </div>
    </>
  );
}

export default Whyus;
