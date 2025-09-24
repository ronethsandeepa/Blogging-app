import type { JSX } from "react";

const HomePage = (): JSX.Element => {
    return (
        <>
            <div className="hp-hero">
                <h1 className="hp-headline">
                    Turn your <span className="hp-gradient">Experience</span> into <span className="hp-gradient">Impact</span>
                </h1>
                <p className="hp-subtext">publish your ideas and knowledge that help others learn - build your reputation</p>
            </div>

        </>
    )
}

export default HomePage;