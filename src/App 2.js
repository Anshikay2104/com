import React from 'react';
import './style.css';
 // Assuming you've downloaded and saved the FontAwesome CSS file locally

const App = () => {
    return (
        <div>
            <section id="header">
                <a href="#"><img src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#" id="lg-bag"><i className="fal fa-shopping-bag"></i></a>
                            <span className="quantity">0</span>
                        </li>
                        <li><a href="#" id="close"><i className="far fa-times"></i></a></li>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="cart.html"><i className="fal fa-shopping-bag"></i>
                        <span className="quantity">0</span>
                    </a>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </section>

            <section id="hero">
                <h4>Trade-in-fair</h4>
                <h2>Super value Jewelleries</h2>
                <h1>On all Jewelleries Products</h1>
                <p>Save more with coupons and up to 15% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="https://i.postimg.cc/PrN2Y6Cv/f1.png" alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.postimg.cc/qvycxW4q/f2.png" alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.postimg.cc/1Rdphyz4/f3.png" alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.postimg.cc/GpYc2JFZ/f4.png" alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.postimg.cc/4yFCwmv6/f5.png" alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.postimg.cc/gJN1knTC/f6.png" alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Wedding Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro" onClick={() => window.location.href = '#'}>
                        <img src="Jeweller_one (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Necklace</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    {/* Add other product elements similarly */}
                    <div className="pro" onClick={() => window.location.href = '#'}>
                        <img src="Jewellery_two (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Necklace</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick={() => window.location.href = '#'}>
                        <img src="Jewellery_three (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Necklace</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro" onClick={() => window.location.href = '#'}>
                        <img src="Jewellery_four (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Necklace</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Service</h4>
                <h2>Up to <span>15% off </span> - All Jewelleries and Accessories</h2>
                <button className="btn normal">Explore more</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="Jewellery_nine (1).jpg" alt="" />
                        <div className="des">
                            <span>Tanishq</span>
                            <h5>Tanishq Jewelleries</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>$78</h4>
                        </div>
                        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    {/* Add other product elements similarly */}
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic jewellery is on sales at cara</span>
                    <button className="btn white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classic jewellery is on sales at cara</span>
                    <button className="btn white">Collection</button>
                </div>
            </section>

            <section id="banner3" className="section-p1">
                <div className="banner-box">
                    <h2>SEASONAL SALES</h2>
                    <h3>Wedding Collection -10% OFF</h3>
                </div>
                <div className="banner-box banner-img2">
                    <h2>SEASONAL SALES</h2>
                    <h3>Wedding Collection -10% OFF</h3>
                </div>
                <div className="banner-box banner-img3">
                    <h2>SEASONAL SALES</h2>
                    <h3>Wedding Collection -10% OFF</h3>
                </div>
            </section>

            <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Sign Up for Newsletters</h4>
                    <p>Get Email updates about our latest shop and <span> special offers.</span> </p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="btn normal">Sign Up</button>
                </div>
            </section>

            <footer className="section-p1">
                <div className="col">
                    <a href="#"><img className="logo" src="https://i.postimg.cc/x8ncvFjr/logo.png" alt="Logo" /></a>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 349, XYZ, India</p>
                    <p><strong>Phone:</strong> +91234567899, +91234567890</p>
                    <p><strong>Hours:</strong> 10.00 - 19.00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                    </div>
                </div>
                <div className="sec">
                    <div className="col">
                        <h4>About</h4>
                        <a href="#">About Us</a>
                        <a href="#">Delivery Information</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div className="col">
                        <h4>My Account</h4>
                        <a href="#">Sign In</a>
                        <a href="#">View Cart</a>
                        <a href="#">My Wishlist</a>
                        <a href="#">Track My Order</a>
                    </div>
                    <div className="col">
                        <h4>Categories</h4>
                        <a href="#">Jewellery</a>
                        <a href="#">Watches</a>
                        <a href="#">Accessories</a>
                        <a href="#">Rings</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
