import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EMAIL: ""
        };
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }
    onFocus(e) {
        e.target.placeholder = '';
    }
    onBlur(e) {
        e.target.placeholder = 'Email address ';
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.email);
    }

    render() {
        return(
            <footer className="footer_area p_120">
                <div className="container">
                    <div className="row footer_inner">
                        <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                    <h3>About Me</h3>
                                </div>
                                <p>
                                    Do you want to be even more successful? Learn to 
                                    love learning and growth. The more effort you put 
                                    into improving your skills,
                                </p>
                                <p>
                                    Copyright 
                                    &copy;<script>document.write(new Date().getFullYear());</script> 
                                    All rights reserved | This template is made with 
                                    <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
                                </p>
                            </aside>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget news_widget">
                                <div className="f_title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Stay updated with our latest trends</p>
                                <div id="mc_embed_signup">
                                    <form className="subscribe_form relative">
                                        <div className="input-group d-flex flex-row">
                                            <input 
                                                name="EMAIL" 
                                                placeholder="Enter email address" 
                                                onFocus={this.onFocus} 
                                                onBlur={this.onBlur} 
                                                required="" 
                                                type="email" 
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                onSubmit={this.onSubmit}
                                            />
                                            <button className="btn sub-btn" onClick={this.onSubmit}><span className="lnr lnr-arrow-right"></span></button>		
                                        </div>				
                                        <div className="mt-10 info"></div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-2">
                            <aside className="f_widget social_widget">
                                <div className="f_title">
                                    <h3>Follow Me</h3>
                                </div>
                                <p>Let us be social</p>
                                <ul className="list">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}