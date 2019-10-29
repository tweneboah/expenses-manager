import React from 'react';
import '../../assets/css/style.css'
import '../../assets/lib/bootstrap/css/bootstrap.min.css';
import '../../assets/lib/font-awesome/css/font-awesome.css';

const Landing = (props) => {
    return (

        <div>

            <section id="hero">
                <div class="hero-container">
                    <h1>Welcome To Xpensify</h1>
                    <h2>Get to know what is happening in your Business everywhere you are</h2>
                    <a href="/create" class="btn-get-started">Get Started</a>
                </div>
            </section>

            <section id="about">
                <div class="container">
                    <div class="row about-container">

                        <div class="col-lg-6 content order-lg-1 order-2">
                            <h2 class="title">Welcome  Xpensify App</h2>
                            <hr />
                            <p>
                                With Xpensify app we help to increase productivity and efficiency of your Business. As a Business owner, you maybe away from your company or you may have different branches of your company so to be able to know what's happening in your company you have to make series of calls but with Xpensify you can get an update, daily report and others with ease
                            </p>

                            <div class="icon-box wow fadeInUp">
                                <div class="icon"><i class="fa fa-shopping-bag"></i></div>
                                <h4 class="title"><a href="">Security</a></h4>
                                <p class="description">All your input records are secure under our server</p>
                            </div>

                            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon"><i class="fa fa-photo"></i></div>
                                <h4 class="title"><a href="">Performance</a></h4>
                                <p class="description">We develop software with modern programming languages with efficient testing to deployment hence it has high performance</p>
                            </div>



                        </div>

                        <div class="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                    </div>

                </div>
            </section>


            <section id="services">
                <div class="container wow fadeIn">
                    <div class="section-header">
                        <h3 class="section-title">What we can do for you</h3>
                        <p class="section-description">we help you grow</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="box">
                                <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
                                <h4 class="title"><a href="">Daily Sales Report</a></h4>
                                <p class="description">With Xpensify will be able to get report on daily sales without hasle</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="box">
                                <div class="icon"><a href=""><i class="fa fa-bar-chart"></i></a></div>
                                <h4 class="title"><a href="">Expenses</a></h4>
                                <p class="description">Managing Expenses somestimes difficult but with Xpensify we help you to keep track of your expenses</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="box">
                                <div class="icon"><a href=""><i class="fa fa-paper-plane"></i></a></div>
                                <h4 class="title"><a href="">Workers Report</a></h4>
                                <p class="description">With this reporting system the Business owner will know who is not rendering his/her responsibilities</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Landing;