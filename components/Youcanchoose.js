import "./Youcanchoose.module.css";

function Youcanchoose() {
  return (
    <>
      <div className="youcanchoose_container">
        <div className="up"></div>
        <div className="left-choose_container"></div>
        <div className="right-choose_container">
          <div className="choose_title">
            <img src="/choose_leaf.png" alt="" />
            <h2>You can choose</h2>
          </div>
          <div className="choose_sm_container">
            <h3 className="choose_info">Blowing</h3>
            <span>
              Our machinery provides fast molding performance without scrap on
              bottle with Maximum uniformity of bottle weight.
            </span>
          </div>
          <div className="choose_sm_container">
            <h3 className="choose_info">Extrusion</h3>
            <span>
              The extruded Mono-layer tubes are manufactured, printed and capped
              in-line. Advanced in-house technologies provide customers with a
              large choice of tube decoration.
            </span>
          </div>
          <div className="choose_sm_container">
            <h3 className="choose_info">Injection Blowing</h3>
            <span>
              Injection Blow Molding Machinery – and the products this
              manufacturing method produces – has become virtually indispensable.
            </span>
          </div>
        </div>
        <div className="down"></div>
      </div>
    </>
  );
}

export default Youcanchoose;
