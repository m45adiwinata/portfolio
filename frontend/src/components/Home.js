import React, {Component} from 'react';
import HomeBanner from './sections/HomeBanner';
import Welcome from './sections/Welcome';
import MyTabs from './sections/MyTabs';
import HomeFeature from './sections/HomeFeature';
import HomeGallery from './sections/HomeGallery';
import HomeTestimonial from './sections/HomeTestimonial';
// import Footer from './sections/Footer';

export default class Home extends Component {
    render() {
        return(
            <div>
                <HomeBanner />
                <Welcome />
                <MyTabs />
                <HomeFeature />
                <HomeGallery />
                <HomeTestimonial />
                {/* <Footer /> */}
            </div>
        );
    }
}