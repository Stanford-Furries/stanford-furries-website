import "./Hero.css";

function Hero(props) {
	return (
		<div className="hero-container">
			<img className="hero-img" src={props.src} alt={props.alt} />
			<div className="hero-overlay">
				<h1 className="animate__animated animate__fadeInDown">
					{props.title}
				</h1>
				<p className="animate__animated animate__fadeInDown animate__delay-1s">
					<i>{props.subtext}</i>
				</p>
			</div>
		</div>
	);
}

export default Hero;
