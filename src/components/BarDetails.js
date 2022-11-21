import {
//   BrowserRouter,
//   Route,
//   Switch,
//   Link,
  useNavigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Map from "./Map";

function BarDetails({ bar }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!bar) {
      navigate("/");
    }
  }, [bar, navigate]);

  const goBack = () => {
    navigate(-1);
  };

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
    <div className="bar-details">
      <ArrowBackIcon fontSize="large" onClick={goBack} className="back-button">
        Go Back
      </ArrowBackIcon>
      <li className="details__list">
        <div className="bar__details">
          <div className="flex">
            <div className="card__content" style={{ height: '70vh', width: '70em' }}>
              <div className="card__title">{name}</div>
              <div className="card__text">Brewery Type: {brewery_type}</div>
              <div className="card__text">
                {street ? `${street}` : "No street address available"}
              </div>
              <div className="card__text">
                {city}, {state}, {postal_code}
              </div>
              <div className="card__text">
                {website_url ? (
                  <a href={website_url} target="_blank" rel="noreferrer">
                    {website_url}
                  </a>
                ) : (
                  "No website available"
                )}
                <div className="card__text">
                  <div className="map">
                    <Map zoomLevel={15} bar={bar}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default BarDetails;
