import React from "react";
import Bar from "./Bar";

function BarContainer({ bars, setSelectedBar }) {
  const barList = bars.map((bar) => {
    return <Bar setSelectedBar={setSelectedBar} key={bar.id} bar={bar} />;
  });

  return <ul className="cards">{barList}</ul>;
}

export default BarContainer;
