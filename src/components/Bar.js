import React from "react";
import { Link } from "react-router-dom";

function Bar({ bar, setSelectedBar }) {
  const { name, id } = bar;

  return (
    <li className="cards__item">
      <div className="card">
        <div className="flex">
          <div className="card__content">
            <Link
              to={`/bar/${id}`}
              onClick={() => setSelectedBar(bar)}
              className="card__title"
            >
              {name}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Bar;
