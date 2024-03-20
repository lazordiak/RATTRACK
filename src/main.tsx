import ReactDOM from "react-dom/client";
import HomeScreen from "./screens/HomeScreen.tsx";
// Import and apply CSS stylesheet
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/*<iframe
      src="https://cdn.glitch.global/0d639cac-8ea0-47b1-8e34-3d142e1c8124/silence.mp3?v=1708893548908"
      allow="autoplay"
      id="audio"
      style={{ display: "none" }}
    ></iframe>
    <audio id="player" autoPlay loop>
      <source
        src="https://cdn.glitch.global/0d639cac-8ea0-47b1-8e34-3d142e1c8124/lawandorder.mp3?v=1708893377280"
        type="audio/mp3"
      />
</audio>*/}
    <main role="main" className="wrapper">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <a href="">🚨 Rat Incident Report System! 🚨</a>
      </div>
      <div className="content">
        <HomeScreen />
      </div>
    </main>
    {/* Footer links to Home and About, Link elements matched in router.jsx */}
    <footer className="footer">
      <div>
        (not really){" "}
        <span style={{ fontWeight: "bold" }}>
          paid for and developed by the NYPD
        </span>
        .
      </div>
      <div>(really) developed by schuyler, shuang, yan, wes...</div>
    </footer>
  </>
);
