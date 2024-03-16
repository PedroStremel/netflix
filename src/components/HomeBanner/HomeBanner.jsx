import "./HomeBanner.scss";

const HomeBanner = () => {
    return(
        <div className="home-banner">
            <div className="our-story">
                <h1 className="story-card" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
                <h2 className="story-card-subtitle" data-uia="story-card-subtitle">Watch anywhere. Cancel anytime</h2>            
                <p className="form-title">Ready to watch? Enter your email to create your membership.</p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Email address" />
                    <button className="input-button text-white">Get Started</button>
                </div>
             </div>
             <div className="shadow"></div>
             <img className="concord" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt=""></img>
        </div>
    )
}

export default HomeBanner;