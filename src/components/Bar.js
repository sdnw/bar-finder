import React from 'react';

function Bar({ bar }) {
    const { name, brewery_type, street, city, state, postal_code, website_url } = bar;


    
    return (
        <li className="cards__item">
            <div className="card">
                <div className="card__content">
                    <div className="card__title">{name}</div>
                    <p className="card__text">{brewery_type}</p>
                    <p className="card__text">{street}</p>
                    <p className="card__text">{city}, {state}, {postal_code}</p>
                    <p className="card__text">
                    {website_url ? <a href={website_url} target="_blank" rel="noreferrer">{website_url}</a> : null}
                    </p>
            </div>
        </div>
        </li>
    );
}

export default Bar;