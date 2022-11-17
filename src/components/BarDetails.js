import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useEffect } from "react";

function BarDetails({ bar }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!bar) {
      navigate("/");
    }
  }, [bar, navigate]);

  const {
    name,
    brewery_type,
    street,
    city,
    state,
    postal_code,
    website_url,
    longitude,
    latitude,
  } = bar || {};

  return (
    <div className="bar__details">
      <div className="flex">
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{brewery_type}</p>
          <p className="card__text">
            {street ? `${street}` : "No street address available"}
          </p>
          <p className="card__text">
            {city}, {state}, {postal_code}
          </p>
          <div className="card__text">
            {website_url ? (
              <a href={website_url} target="_blank" rel="noreferrer">
                {website_url}
              </a>
            ) : (
              "No website available"
            )}
            <p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarDetails;
