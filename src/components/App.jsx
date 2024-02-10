import ContentBlock from "./ContentBlock";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        // title="Furries at Stanford"
        // subtext="We like furries :3"
        src="fas-quad.jpg"
        alt="Furries at Stanford logo"
      />
      <main>
        <a target="#" href="https://discord.gg/DdS4ZwQUW9" class="call-to-action">Join Us</a>
        <ContentBlock header="What We Do" text="We organize meetups with other furries in the area, make crafts, draw art together, and go to conventions. We have regular meeWe have a community of Stanfurs and organize events with other furries in the Bay Area." />
        <ContentBlock />
        <ContentBlock header="How do I get involved?" text="We're most active on Discord. Alternatively, if you want to meet more furries in the area, join our Telegram group. You don't have to be a furry to join–if you want to see what it's all about, stop by. We guarantee you'll have a paw-some time :3" />
        <ContentBlock />
        <a target="#" href="https://discord.gg/DdS4ZwQUW9" class="call-to-action">Join Our Discord</a>
      </main>
      <Footer />
    </div>
  );
}

export default App;