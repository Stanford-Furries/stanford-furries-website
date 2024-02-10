import "./Hero.css";

function Hero(props) {
    return (
        <div id="hero-container">
            <img id="hero-img" src={props.src} alt={props.alt} />
            <div id="hero-overlay">
                <h1 className="animate__animated animate__fadeInDown">{props.title}</h1>
                <p className="animate__animated animate__fadeInDown animate__delay-1s">{props.subtext}</p>
            </div>
        </div>
    );
}

export default Hero;