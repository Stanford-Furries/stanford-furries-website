// import Album from "./Album";
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
        src="fas-quad.jpg"
        alt="Furries at Stanford logo"
      />
      <main>
        <Spacer type="medium" />
        <ContentBlock>
          <h2>What We Do</h2>
          <Spacer type="small" />
          <p>
            We organize meetups with other furries in the area, make crafts,
            draw art together, and go to conventions. We have a community of
            Stanfurs and organize events with other furries in the Bay Area.
          </p>
        </ContentBlock>
        <ContentBlock>
          <h2>How do I get involved?</h2>
          <Spacer type="small" />
          <p>
            We advertise and plan campus-wide events throughout the school year!
            In terms of chatting, we're most active on <b>Discord</b>. To access
            a link, you'll need to attend one of our in-person events or get an
            invitation from a current member. Alternatively, if you want to meet
            more furries in the area, join our Telegram group! You don't have to
            be a furry to join–if you want to see what it's all about, stop by.
            We guarantee you'll have a paw-some time :3
          </p>
        </ContentBlock>
        {/* <ContentBlock>
          <Album />
        </ContentBlock> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
