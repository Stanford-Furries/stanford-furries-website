import Album from "./Album";
import ContentBlock from "./ContentBlock";
import DiscordCTAButton from "./DiscordCTAButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Spacer from "./Spacer";
import Hero from "./Hero";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero
				title="Furries at Stanford"
				subtext="The official furry club at Stanford University!"
				src="fas-peek.jpg"
				alt="Furries at Stanford logo"
			>
				<p className="animate__animated animate__fadeInDown animate__delay-2s">
					<DiscordCTAButton link="https://discord.gg/P2pPZUPgEw" />
				</p>
			</Hero>
			<main>
				<Spacer type="medium" />
				<ContentBlock>
					<h2>What We Do</h2>
					<Spacer type="small" />
					<p>
						We organize meetups with other furries in the area, make
						crafts, draw art together, and go to conventions. We
						have a community of Stanfurs and organize events with
						other furries in the Bay Area.
					</p>
				</ContentBlock>
				<ContentBlock>
					<h2>How do I get involved?</h2>
					<Spacer type="small" />
					<p>
						We advertise and plan campus-wide events throughout the
						school year! Join{" "}
						<a href="https://forms.gle/K7eRA3LmsCuM7eDG7">
							our mailing list
						</a>{" "}
						to be informed of any that are upcoming. You don't have
						to be a furry to join–if you want to see what it's all
						about, stop by. We guarantee you'll have a paw-some time
						:3
					</p>
				</ContentBlock>
				<ContentBlock>
					<h2>How do I get in contact?</h2>
					<Spacer type="small" />
					<p>
						We're most active on Discord. To access a link, you'll
						need to attend one of our in-person events or get an
						invitation from a current member. Alternatively, if you
						want to meet more furries in the area, join our Telegram
						group! For any other inquiries, feel free to send us an
						email at{" "}
						<a href="mailto:furries.at.stanford@gmail.com">
							furries.at.stanford@gmail.com
						</a>
						!
					</p>
				</ContentBlock>
				<ContentBlock>
					<Album />
				</ContentBlock>
				<ContentBlock>
					<h2>Event Schedule</h2>
					<Spacer type="small" />
					<p>
						When and where are our upcoming events? Find our
						tentative event calendar below. Click "Add to Google
						Calendar" at the very bottom to always have our events
						in your Google Calendar!
					</p>
					<Spacer type="small" />
					<iframe
						title="gcal"
						src="https://calendar.google.com/calendar/embed?src=furries.at.stanford%40gmail.com&ctz=America%2FLos_Angeles"
						style={{ border: 0 }}
						width="100%"
						height="600"
						frameborder="0"
					></iframe>
				</ContentBlock>
				<Spacer type="small" />
				<DiscordCTAButton link="https://discord.gg/P2pPZUPgEw" />
				<Spacer type="medium" />
			</main>
			<Footer />
		</div>
	);
}

export default App;
