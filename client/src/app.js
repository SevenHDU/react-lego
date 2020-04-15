import React from 'react';
import { hot } from 'react-hot-loader/root';
import Text from './modules/text/index';

function app() {
    return (
        <div>
            <p>SevenHDU</p>
            <Text text="hello"></Text>
        </div>
    );
}

export default hot(app);
