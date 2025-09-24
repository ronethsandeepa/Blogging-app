import type { JSX } from "react";
import image1 from "../assets/img3.png";

const HomePage = (): JSX.Element => {
    return (
        <>
            <section className="hero-wrapper">
                <div className="hp-hero">
                    <h1 className="hp-headline">
                        Turn your <span className="hp-gradient">Experience</span> into <span className="hp-gradient">Impact</span>
                    </h1>
                    <p className="hp-subtext">publish your ideas and knowledge that help others learn - build your reputation</p>
                </div>

                <img
                    src={image1}
                    alt="hero"
                    className="hp-hero-img"
                />
            </section>

        </>
    )
}

export default HomePage;