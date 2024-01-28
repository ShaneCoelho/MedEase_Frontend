import React from 'react';
import StyleLoading from './StyleLoading';

const Loading = () => {
    return (
        <StyleLoading>
            <div>
                <span>↓</span>
                <span style={{ "--delay": "0.1s" }}>↓</span>
                <span style={{ "--delay": "0.3s" }}>↓</span>
                <span style={{ "--delay": "0.4s" }}>↓</span>
                <span style={{ "--delay": "0.5s" }}>↓</span>
            </div>
        </StyleLoading>
    )
}

export default Loading;