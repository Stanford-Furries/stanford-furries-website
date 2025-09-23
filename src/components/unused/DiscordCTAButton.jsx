import "./DiscordCTAButton.css";

function DiscordCTAButton(props) {
	return (
		<div className="cta-container">
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="cta-button"
			>
				<img
					className="button-logo"
					src="./discord-logo.png"
					alt="Discord icon"
				/>
				Join our Discord!
			</a>
		</div>
	);
}

export default DiscordCTAButton;
