import "./Album.css";

function Album() {
	// May be moved into props if we need multiple
	const imgContents = [
		{
			src: "fas-quad.jpg",
			alt: "alt text",
			desc: "Image 1: furries get bamboozled",
		},
		{
			src: "fas-quad.jpg",
			alt: "alt text",
			desc: "Image 2: furries!",
		},
		{
			src: "fas-quad.jpg",
			alt: "alt text",
			desc: "Image 3: furries yet again",
		},
		{
			src: "fas-quad.jpg",
			alt: "alt text",
			desc: "Image 4: furries... lmao",
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
