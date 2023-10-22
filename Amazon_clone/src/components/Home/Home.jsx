import React, { useContext } from "react";
import Product from "../ProductList/Product";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <div className="carousels">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/Juneminiart/3000x1200_most-loved._CB634429484_.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Monitors/Fest/June/D43539063_IN_OP_Back_to_school_Apr22_3000x1200._CB634480593_.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  {/* <h3>Second slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MonsoonMiniART_June/Homepage_DesktopHeroTemplate_3000x1200_Unrec_2x._CB636267028_.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="home__row row1">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
