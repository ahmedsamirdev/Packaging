import "./Whyus.module.css";

function Whyus() {
  return (
    <>
      <div className="whyus_wrapper">
        <div className="whyus_title">
          <img src="/whyus_leaf.png" alt="" />
          <h2>Why us</h2>
        </div>
        <div className="whyus-flex">
          <div className="whyus_container">
            <img src="/whyus_1.png" alt="" />
            <h4>Our customer care</h4>
            <p>
              We strive continuously to anticipate customers
              challenges to provide the best support for their
              developments.
            </p>
          </div>
          <div class="w-vl"></div>

          <div className="whyus_container">
            <img src="/whyus_2.png" alt="" />
            <h4>Design Creativity</h4>
            <p>
              We offer customers the widest array of design, engineering and
              manufacturing capabilities.
            </p>
          </div>
          <div class="w-vl"></div>

          <div className="whyus_container">
            <img src="/whyus_3.png" alt="" />
            <h4>Quality packaging</h4>
            <p>
              With our leading plastics technologies we provide
              innovative packaging solutions that enable our customers to
              fulfill their market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyus;
