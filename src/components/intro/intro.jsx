import React from "react";

class Intro extends React.PureComponent {
    render() {
        return (
            <section className="intro">
                <div className="intro__wrapper">
                    <div className="intro__content">
                        <h3>Front<span>&ndash;End</span> Engineer</h3>
                        <h2>Rogatnev&#10;Nikita</h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;