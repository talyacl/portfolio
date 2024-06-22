import React, { useEffect } from 'react';
import './StarsBackground.css';

const StarsBackground = () => {
    useEffect(() => {
        const stars = document.getElementById('stars');
        const starsCtx = stars.getContext('2d');

        let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };

        function setupStars() {
            screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                center: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                hypotenuse: Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))
            };
            window.cancelAnimationFrame(updateStars);
            stars.width = screen.w;
            stars.height = screen.h;
            starsElements = [];
            for (let i = 0; i < starsParams.number; i++) {
                starsElements[i] = new Star();
            }
        }

        function Star() {
            this.x = Math.random() * stars.width;
            this.y = Math.random() * stars.height;
            this.z = Math.random() * stars.width;

            this.move = function() {
                this.z -= starsParams.speed;
                if (this.z <= 0) {
                    this.z = stars.width;
                }
            };

            this.show = function() {
                let x, y, rad, opacity;
                x = (this.x - screen.center.x) * (stars.width / this.z);
                x = x + screen.center.x;
                y = (this.y - screen.center.y) * (stars.width / this.z);
                y = y + screen.center.y;
                rad = stars.width / this.z;
                opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

                starsCtx.beginPath();
                starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                starsCtx.arc(x, y, rad, 0, Math.PI * 2);
                starsCtx.fill();
            };
        }

        function updateStars() {
            starsCtx.fillStyle = "black";
            starsCtx.fillRect(0, 0, stars.width, stars.height);
            starsElements.forEach(function(s) {
                s.show();
                s.move();
            });
            window.requestAnimationFrame(updateStars);
        }

        setupStars();
        updateStars();

        window.onresize = setupStars;
    }, []);

    return <canvas id="stars"></canvas>;
};

export default StarsBackground;
