
import React, { useState, useEffect } from 'react';
import './GlobalLoader.scss';

const GlobalLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const minDisplayTime = 1500;
        let loadStartTime = Date.now();
        let timeoutId;
        const handleLoad = () => {
            const elapsedTime = Date.now() - loadStartTime;
            const remainingTime = minDisplayTime - elapsedTime;
            timeoutId = setTimeout(() => {
                setIsFinished(true); 
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);

            }, remainingTime > 0 ? remainingTime : 0);
        };

        window.addEventListener('load', handleLoad);
        if (document.readyState === 'complete') {
            handleLoad();
        }
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    if (!isLoading) return null;
    return (
        <div className={`global-loader-container ${isFinished ? 'finished' : ''}`}>
            <div className="circular-loader-global" />
        </div>
    );
};

export default GlobalLoader;