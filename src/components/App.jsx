import Album from "./Album";
import ContentBlock from "./ContentBlock";
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
				// title="Furries at Stanford"
				// subtext="We like furries :3"
				src="fas-peek.jpg"
				alt="Furries at Stanford logo"
			/>
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
				<Spacer type="medium" />
			</main>
			<Footer />
		</div>
	);
}

export default App;
