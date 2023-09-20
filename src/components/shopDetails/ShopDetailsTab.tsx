import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import auth_1 from '../../../public/assets/img/team/auth-1.png';
import auth_2 from '../../../public/assets/img/team/auth-2.png';
import auth_3 from '../../../public/assets/img/team/auth-3.png';

const handleSubmit = (event:any) => {
    event.preventDefault()
}

const ShopDetailsTab = () => {
    return (
        <div className="product_info-faq-area pb-0 pt-120 wow fadeInUp" data-wow-delay=".3s">
            <div className="product-details-tab-wrapper">
                <nav className="product-details-nav mb-30">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link className="nav-item nav-link active" id="pro-info-1-tab" data-bs-toggle="tab" href="#pro-info-1"
                            role="tab" aria-selected="true">Description</Link>
                        <Link className="nav-item nav-link" id="pro-info-3-tab" data-bs-toggle="tab" href="#pro-info-3"
                            role="tab" aria-selected="false">Reviews (3)</Link>
                    </div>
                </nav>
                <div className="product-details-content mb-30">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade active show" id="pro-info-1" role="tabpanel">
                            <div className="tabs-wrapper mt-0">
                                <div className="product__details-des">
                                    <p>In marketing a product is an object or system made available for consumer use it is
                                        anything that can be offered to a
                                        market to
                                        the desire or need of a \retailing, products are often referred to as merchandise,
                                        and in manufacturing, products are
                                        bought as
                                        materials and then sold as finished goods. A service regarded to as a type of
                                        product. Commodities are usually raw
                                        materials
                                        metals and agricultural products, but a commodity can also be anything wide the open
                                        market. In project management,
                                        the formal definition of the project deliverables
                                    </p>
                                    <p className="mb-0">A product can be classified as tangible or intangible. A tangible
                                        product is a
                                        physical object that can be perceived by
                                        touch
                                        building, vehicle, gadget, An intangible product is a product that can only be
                                        perceived indirectly such as an insurance
                                        policy.
                                        can be broadly classified under intangible be durable or non durable. A product line
                                        is{` "a`} group of products that are
                                        closely
                                        either because they function in a similar manner, are sold to the same
                                        customergroups.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pro-info-3" role="tabpanel">
                            <div className="tabs-wrapper mt-0">
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={auth_1} alt="image not found" />
                                    </div>
                                    <div className="course-review-list">
                                        <h5><Link href="#">Sotapdi Kunda</Link></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>55 min ago</span>
                                        </div>
                                        <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                            solutions.
                                            This course does start from the beginning with very little knowledge and
                                            gives a
                                            great overview of common tools used for data science and progresses into
                                            more
                                            complex concepts and ideas.
                                        </p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <Image src={auth_2} style={{ width: 'auto', height: 'auto' }} alt="image not found" />
                                    </div>
                                    <div className="course-review-list">
                                        <h5><Link href="#">Samantha</Link></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>45 min ago</span>
                                        </div>
                                        <p>The course is good at explaining very basic intuition of the concepts. It
                                            will get
                                            you scratching the surface so to say. where this course is unique is the
                                            implementation methods are so well defined Thank you to the team !.
                                        </p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <Image src={auth_3} style={{ width: 'auto', height: 'auto' }} alt="image not found" />
                                    </div>
                                    <div className="course-review-list">
                                        <h5><Link href="#">Michell Mariya</Link></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>30 min ago</span>
                                        </div>
                                        <p>This course is amazing..!
                                            I started this course as a beginner and learnt a lot. Instructors are great.
                                            Query
                                            handling can be improved.Overall very happy with the course.
                                        </p>
                                    </div>
                                </div>
                                <div className="product__details-comment ">
                                    <div className="comment-title mb-20">
                                        <h3>Add a review</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="comment-rating mb-20">
                                        <span>Overall ratings</span>
                                        <ul>
                                            <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                            <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                            <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                            <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                            <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="comment-input-box mb-0">
                                        <form onSubmit={handleSubmit} action="#">
                                            <div className="row">
                                                <div className="col-xxl-12">
                                                    <div className="single-input-field">
                                                        <textarea placeholder="Your review"
                                                            className="comment-input comment-textarea mb-20"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="single-input-field mb-20">
                                                        <input type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6">
                                                    <div className="single-input-field mb-20">
                                                        <input type="email" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-12">
                                                    <div className="comment-submit">
                                                        <button type="submit" className="btn">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetailsTab;