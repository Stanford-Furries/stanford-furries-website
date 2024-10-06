import "./Album.css";

function Album() {
	// May be moved into props if multiple Albums are needed
	const imgContents = [
		{
			src: "fas-stanfordtree.jpg",
			alt: "alt text",
			desc: "Cameos with the Stanford tree! x3",
		},
		{
			src: "fas-artjam.png",
			alt: "alt text",
			desc: "Art events and movie nights! :3",
		},
		{
			src: "fas-meetngreet.jpg",
			alt: "alt text",
			desc: "Social hangouts and meetn'greets! :D",
		},
		{
			src: "fas-boardgames.png",
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
