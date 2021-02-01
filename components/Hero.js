import "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className="hero_container">
        <div className="left_hero">
            <span>We pack your product with care.</span>
            <a href="/">Contact us</a>
        </div>
        <div className="right_hero">
            <img src="/hero_1.png" alt="" className="hero1"/>
             <img src="/hero_2.png" alt="" className="hero2"/>
           <img src="/hero_3.png" alt="" className="hero3"/> 
        </div>
      </div>
    </>
  );
}

export default Hero;
