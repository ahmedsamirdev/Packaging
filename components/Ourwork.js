import "./Ourwork.module.css";

function Ourwork() {
  return (
    <>
      <div className="ourwork_container">
        <div className="ourwork_title">
          <img src="/whyus_leaf.png" alt="" />
          <h2>Our work</h2>
        </div>
        <div className="ourwork_info">
          <h4>
            Ibeeca provides a wide range of packaging products for Food & beverage and chemical. By
            producing plastic tubes, Bottles, Jars, Caps.
          </h4>
        </div>
        <div className="package_wrapper">
          <div className="package_container">
            <div className="package-imgs">
              <img className="package-img" src="/package1.png" alt="" />
              <img className="package-circle" src="/circle.png" alt="" />
            </div>
          </div>

          <div className="package_container">
            <div className="package-imgs">
              <img className="package-img" src="/package2.png" alt="" />
              <img className="package-circle" src="/circle.png" alt="" />
            </div>
          </div>
          <div className="package_container">
            <div className="package-imgs">
              <img className="package-img" src="/package2.png" alt="" />
              <img className="package-circle" src="/circle.png" alt="" />
            </div>
          </div>

          <div className="package_container">
            <div className="package-imgs">
              <img className="package-img" src="/package4.png" alt="" />
              <img className="package-circle" src="/circle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourwork;
