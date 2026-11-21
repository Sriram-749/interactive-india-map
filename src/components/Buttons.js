import React from "react";
import { STATES } from "./States";
import { UNION_TERRITORIES } from "./UnionTerritories.js";

function Buttons({ selectedState, setSelectedState }) {
  return (
    <div className="buttons">
      <div className="states-section">
        <h3 className="list-heading">
          <span className="heading-accent saffron"></span>
          STATES
          <span className="count">{STATES.length}</span>
        </h3>

        <div className="button-grid">
          {STATES.map((state) => (
            <button
              key={state}
              type="button"
              className={`region-button ${
                selectedState === state ? "active" : ""
              }`}
              onClick={() => setSelectedState(state)}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      <div className="territories-section">
        <h3 className="list-heading">
          <span className="heading-accent green"></span>
          UNION TERRITORIES
          <span className="count">{UNION_TERRITORIES.length}</span>
        </h3>

        <div className="button-grid">
          {UNION_TERRITORIES.map((territory) => (
            <button
              key={territory}
              type="button"
              className={`region-button ${
                selectedState === territory ? "active" : ""
              }`}
              onClick={() => setSelectedState(territory)}
            >
              {territory}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="clear-button"
        onClick={() => setSelectedState("")}
        disabled={!selectedState}
      >
        ↺ Clear selection
      </button>
    </div>
  );
}

export { Buttons };
