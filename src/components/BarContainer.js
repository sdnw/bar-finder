import React from 'react';
import Bar from './Bar';

function BarContainer({ bars }) {
    const barList = bars.map((bar) => {
        return <Bar key={bar.id} bar={bar} />
    });

    return (
        <ul className="cards">
            {barList}
        </ul>
    );
}

export default BarContainer;