import "./Album.css";

function Album() {
	// May be moved into props if we need multiple
	const imgContents = [
		{
			src: "fas-quad.jpg",
			alt: "alt text",
			desc: "Furries on the quad! :3",
		},
		{
			src: "fas-peek.jpg",
			alt: "alt text",
			desc: "Peek-a-boo! x3",
		},
		{
			src: "fas-bicycle.jpg",
			alt: "alt text",
			desc: "Biking through the quad! :D",
		},
		{
			src: "fas-boardgames1.png",
			alt: "alt text",
			desc: "Board games with friends! :>",
		},
	];

	return (
		<div className="album-container">
			{imgContents.map((imgContent) => (
				<div className="album-image">
					<img src={imgContent.src} alt={imgContent.alt} />
					<div className="text-container">
						<span>{imgContent.desc}</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default Album;
