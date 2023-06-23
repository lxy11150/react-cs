import React, { useState } from 'react';
import './bubble.scss';

const Bubble = ({ link }) => {
    const [popped, setPopped] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleClick = () => {
        setPopped(true);
        // 在这里可以执行跳转逻辑，例如使用 react-router-dom 的 useHistory 钩子
    };

    return (
        <a
            href={link}
            className={`bubble ${popped ? 'popped' : ''}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            onClick={handleClick}
        >
            Click me
        </a>
    );
};

export default Bubble;
