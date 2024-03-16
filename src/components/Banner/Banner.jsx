import "./Banner.scss";

const Banner = () => {
    return(
        <div className="banner">
            <div className="contents">
                <h1 className="title">Ginny &amp; Georgia</h1>
                <div className="banner_buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button"> My List</button>
                </div>
                <h1 className="description">
                Angsty and awkward fifteen year old Ginny Miller often feels more
                mature than her thirty year old mother, the irresistible and dynamic
                Georgia Miller...
                </h1>
            </div>
            <div className="fadeBottom"></div>
        </div>
    )
}

export default Banner;