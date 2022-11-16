import React from "react";

function Bar({ bar }) {
  const { name, brewery_type, street, city, state, postal_code, website_url } =
    bar;

  return (
    <li className="cards__item">
      <div className="card">
      <div class="flex"> 
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{brewery_type}</p>
          <p className="card__text">{street ? (
            `${street}`) : ('No street address available'
          )}</p>
          <p className="card__text">
            {city}, {state}, {postal_code}
          </p>
          <p className="card__text">
            {website_url ? (
              <a href={website_url} target="_blank" rel="noreferrer">
                {website_url}
              </a>
            ) : (
              "No website available"
            )}
          </p>
        </div>
        </div>
      </div>
    </li>
  );
}

export default Bar;
