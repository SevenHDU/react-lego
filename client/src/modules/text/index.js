import React from 'react';
import './index.scss';

// eslint-disable-next-line react/prop-types
function Text({ text }) {
    return (
        <div className="text">
            <p>{text}</p>
        </div>
    );
}

export default Text;
