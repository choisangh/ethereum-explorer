import React from 'react';
import Particles from "particlesjs";


class Background extends React.Component {
    componentDidMount() {
        Particles.init({
            selector: ".background",
            color: ["#03dac6", "#ff0266", "#000000"],
            connectParticles: true,
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        color: ["#faebd7", "#03dac6", "#ff0266"],
                        maxParticles: 43,
                        connectParticles: false,
                    },
                },
            ],
        });
    }
    render() {
        return (
            <div className='background-container'>
                <canvas className="background" style={{ zIndex: 0 }}>
                </canvas>
            </div>


        );
    }
}

export default Background;
