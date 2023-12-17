import './promo.css'
import Image from './../../img/images/header-img.jpg'
// import vector from './../../img/icons/'

const Promo = () => {

    return (<div className="promo">
            <div className="promo__wrap">
                <div className="container">
                    <div className="promo__box">
                      <div className="promo__left">
                          <div className="promo__title">
                              <span className="promo__highlight-first">LET’S</span> EXPLORE <span className="promo__highlight-color">UNIQUE</span> CLOTHES.
                          </div>
                          <div className="promo__text">
                              Live for Influential and Innovative fashion!
                          </div>
                          <div className="promo__flex">
                              <div className="promo__figure">

                              </div>
                              <div className="promo__btn">
                                  <a href="#">Shop Now</a>
                              </div>
                          </div>
                      </div>
                        <div className="promo__image">
                            <img src={Image} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Promo;