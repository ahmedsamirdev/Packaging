import "./Ourwork.module.css";

function Ourwork() {
  return (
    <>
      <div className="ourwork_title">
        <img src="/whyus_leaf.png" alt="" />
        <h2>Our work</h2>
      </div>
      <div className="ourwork_info">
        <h5>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </h5>
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
    </>
  );
}

export default Ourwork;
