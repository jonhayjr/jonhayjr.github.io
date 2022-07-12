import { animateScroll as scroll } from "react-scroll";

const Footer = ({updateTitle}) => {
    const scrollToTop = () => {
        scroll.scrollToTop();
        updateTitle("Home")
      }
    return (
        <footer className="bg-dark mt-5 py-3 footer">
            <div className="container-fluid">
            <div className="row text-center justify-content-center">
                <div className="col">
                <p className="text-white m-0 h5">Created by Jon Hay</p>
                </div>
            </div>
            <div className="row text-center justify-content-center pt-3">
                <div className="col">
                    <button className="text-primary lead footer-link" onClick={scrollToTop}>Back To Top</button>
                </div>
            </div>
            </div>
      </footer>
    )
}

export default Footer
