import React from "react";
import "../Dashboard.css";
import { IndiaMap } from "./IndiaMap";
import { Buttons } from "./Buttons";

function Dashboard() {
  const [selectedState, setSelectedState] = React.useState("");

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <span className="brand-icon">🇮🇳</span>
          <div>
            <h1>India Explorer</h1>
            <p>Discover the states and union territories of India</p>
          </div>
        </div>

        <div className="header-badge">INTERACTIVE INDIA MAP</div>
      </header>

      <section className="explorer-layout">
        <div className="map-card">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GEOGRAPHICAL EXPLORATION</span>
              <h2>Explore India</h2>
              <p>Select a region to discover it on the map.</p>
            </div>
            <span className="map-indicator">● LIVE MAP</span>
          </div>

          <div className="map-container">
            <IndiaMap state={selectedState} />
          </div>

          <div className="map-footer">
            <span className="legend-dot"></span>
            <span>Selected region</span>
            <span className="map-footer-divider"></span>
            <span>Choose any state or territory to highlight it.</span>
          </div>
        </div>

        <aside className="selection-card">
          <div className="selection-heading">
            <span className="eyebrow">REGION SELECTOR</span>
            <h2>Choose a destination</h2>
            <p>Explore all 28 states and 8 union territories.</p>
          </div>

          <div className="selection-content">
            <Buttons
              selectedState={selectedState}
              setSelectedState={setSelectedState}
            />
          </div>
        </aside>
      </section>

      <footer className="dashboard-footer">
        <span>INDIA EXPLORER</span>
        <span>Made with curiosity 🇮🇳</span>
      </footer>
    </main>
  );
}

export { Dashboard };
