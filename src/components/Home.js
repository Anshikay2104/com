import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import '../style.css';
import Slideshow from './Slideshow';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = ({ handleAddToCart }) =>  {
  return (
    <div>
      <section id="hero">
                <h4>Trade-in-fair</h4>
                <h2>Super value Jewelleries</h2>
                <h1>On all Jewelleries Products</h1>
                <p>Save more with coupons and up to 15% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="https://www.dhresource.com/webp/m/0x0/f2/albu/g22/M00/E8/89/rBNaEmKN5xeAMYRaAAR9FMoDwu4047.jpg" alt="" />
                    <h6>Bracelets</h6>
                </div>
                <div className="fe-box">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <h6>Rings</h6>
                </div>
                <div className="fe-box">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/UG/QQ/KU/128986558/aesthetic-collection-3.jpg" alt="" />
                    <h6>Pendants</h6>
                </div>
                <div className="fe-box">
                    <img src="https://images.meesho.com/images/products/40159388/hkrnl_512.jpg" alt="" />
                    <h6>Earrings</h6>
                </div>
                <div className="fe-box">
                    <img src="https://i.etsystatic.com/19079983/r/il/2ff60a/2335336960/il_fullxfull.2335336960_ggdu.jpg" alt="" />
                    <h6>Anklets</h6>
                </div>
                <div className="fe-box">
                    <img src="https://imgmedia.lbb.in/media/2022/10/63512fa98e26490be612d542_1666265001101.jpg" alt="" />
                    <h6>Watches</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Wedding Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro" >
                        <img src="Jeweller_one (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Diamond Necklace</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>Rs. 78000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    {/* Add other product elements similarly */}
                    <div className="pro" >
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
                            <h4>Rs. 90000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro" >
                        <img src="Jewellery_three (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Bangles</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>Rs. 40000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro" >
            <img src="Jewellery_four (1).jpg" alt="" />
            <div className="des">
                <span>Malabar</span>
                <h5>Gold Bangles</h5>
                <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h4>Rs. 28000</h4>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                <i className="fas fa-shopping-cart cart"></i>
            </a>
        </div>
                </div>
            </section>
            <section id="product1" className="section-p1">
                
                <div className="pro-container">
                    <div className="pro" >
                        <img src="Jewellery_five (1).jpg" alt="" />
                        <div className="des">
                            <span>Malabaar</span>
                            <h5>Gold Bangles</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>Rs. 23500</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    {/* Add other product elements similarly */}
                    <div className="pro" >
                        <img src="Jewellery_six (1).jpeg" alt="" />
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
                            <h4>Rs. 80000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro" >
                        <img src="Jewellery_seven (1).jpg" alt="" />
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
                            <h4>Rs. 76000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro" >
                        <img src="Jewellery_Sixteen (1).jpg" alt="" />
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
                            <h4>78,000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <div className="pro-container">
                    <div className="pro" >
                        <img src="Jewellery_nine (1).jpg" alt="" />
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
                            <h4>Rs. 65000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    {/* Add other product elements similarly */}
                    <div className="pro" >
                        <img src="Jewellery_ten (1).jpeg" alt="" />
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
                            <h4>Rs. 67500</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro" >
                        <img src="Jewellery_Eleven (1).jpg" alt="" />
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
                            <h4>Rs. 78000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro">
                        <img src="Jewellery_Twelve (1).jpg" alt="" />
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
                            <h4>Rs. 98000</h4>
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
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
                        <img src="modernone.jpeg" alt="" />
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
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro">
                        <img src="moderntwo.jpeg" alt="" />
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
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro">
                        <img src="modrnthree.webp" alt="" />
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
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                    <div className="pro">
                        <img src="modernfour.jpeg" alt="" />
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
                        <a href="#" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                            <i className="fas fa-shopping-cart cart"></i>
                        </a>
                    </div>
                </div>
            </section>

            <Slideshow/>
            
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
    
  )
}
export default Home;