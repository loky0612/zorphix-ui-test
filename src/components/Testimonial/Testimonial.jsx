import React from 'react';
import '../../assets/css/App.css';
import img1 from '../../assets/images/testimonials/author-01.png';
import img2 from '../../assets/images/testimonials/author-02.png';
import img3 from '../../assets/images/testimonials/author-03.png';

const Testimonial = () => {
    return (
        <div id="testimonials" className="pt-20 md:pt-[120px]">
            <div className="container px-4">
                <div className="flex flex-wrap">
                    <div className="mx-4 w-full">
                        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Testimonials
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                                What our Client Say
                            </h2>
                            <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial" data-wow-delay=".1s">
                            <div className="ud-testimonial-content mb-6">
                                <p className="text-base tracking-wide text-body-color">
                                    “Our members are so impressed. It's intuitive. It's clean.
                                    It's distraction free. If you're building a community.
                                </p>
                            </div>
                            <div className="ud-testimonial-info flex items-center">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                    <img src={img1} alt="author" />
                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">Sabo Masties</h4>
                                    <p className="text-xs text-[#969696]">Founder @ Rolex</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial" data-wow-delay=".15s">
                            <div className="ud-testimonial-content mb-6">
                                <p className="text-base tracking-wide text-body-color">
                                    “Our members are so impressed. It's intuitive. It's clean.
                                    It's distraction free. If you're building a community.
                                </p>
                            </div>
                            <div className="ud-testimonial-info flex items-center">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                    <img src={img2} alt="author" />
                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">Margin Gesmu</h4>
                                    <p className="text-xs text-[#969696]">Founder @ UI Hunter</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="ud-single-testimonial wow fadeInUp mb-12 bg-white p-8 shadow-testimonial" data-wow-delay=".2s">
                            <div className="ud-testimonial-content mb-6">
                                <p className="text-base tracking-wide text-body-color">
                                    “Our members are so impressed. It's intuitive. It's clean.
                                    It's distraction free. If you're building a community.
                                </p>
                            </div>
                            <div className="ud-testimonial-info flex items-center">
                                <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                                    <img src={img3} alt="author" />
                                </div>
                                <div className="ud-testimonial-meta">
                                    <h4 className="text-sm font-semibold">William Smith</h4>
                                    <p className="text-xs text-[#969696]">Founder @ Trorex</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Testimonial;