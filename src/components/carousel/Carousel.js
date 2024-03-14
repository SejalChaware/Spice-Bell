import wp from '../carousel/images/wp.jpg'
import sh from '../carousel/images/sh.jpg'

const Carousel = () => {

    return (

        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={3000}>
                    <div className="HomeHeading" >
                        <h3>Find Your Car</h3>
                        <h1>TODAY</h1>
                    </div>
                    <img src={wp} className=" w-75 card_hover" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                    <div className="HomeHeading" >
                        <h3>गाड़ी चाहिए BOSS</h3>
                        <h1>दिला दूंगा</h1>
                    </div>
                    <img src={sh} className=" w-75 card_hover" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}
export default Carousel;