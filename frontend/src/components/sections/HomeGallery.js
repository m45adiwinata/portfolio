import React, {Component} from 'react';
import imgproject1 from '../../img/gallery/project-1.jpg';
import imgproject2 from '../../img/gallery/project-2.jpg';
import imgproject3 from '../../img/gallery/project-3.jpg';
import imgproject4 from '../../img/gallery/project-4.jpg';
import imgproject5 from '../../img/gallery/project-5.jpg';
import imgproject6 from '../../img/gallery/project-6.jpg';

export default class HomeGallery extends Component {
    render() {
        return(
            <section className="home_gallery_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>Our Latest Featured Projects</h2>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="isotope_fillter">
                        <ul className="gallery_filter list">
                            <li className="active" data-filter="*"><a href="#">All</a></li>
                            <li data-filter=".brand"><a href="#">Vector</a></li>
                            <li data-filter=".manipul"><a href="#">Raster</a></li>
                            <li data-filter=".creative"><a href="#">UI/UX</a></li>
                            <li data-filter=".design"><a href="#">Printing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="gallery_f_inner row imageGallery1">
                        <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject1} alt="" />
                                    <a className="light" href={imgproject1}><img src={imgproject1} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>3D Helmet Design</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject2} alt="" />
                                    <a className="light" href={imgproject2}><img src={imgproject2} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>2D Vinyl Design</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject3} alt="" />
                                    <a className="light" href={imgproject3}><img src={imgproject3} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>Creative Poster Design</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject4} alt="" />
                                    <a className="light" href={imgproject4}><img src={imgproject4} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>Embosed Logo Design</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject5} alt="" />
                                    <a className="light" href={imgproject5}><img src={imgproject5} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>3D Disposable Bottle</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                            <div className="h_gallery_item">
                                <div className="g_img_item">
                                    <img className="img-fluid" src={imgproject6} alt="" />
                                    <a className="light" href={imgproject6}><img src={imgproject6} alt="" /></a>
                                </div>
                                <div className="g_item_text">
                                    <h4>3D Logo Design</h4>
                                    <p>Client Project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more_btn">
                        <a className="main_btn" href="#">Load More Items</a>
                    </div>
                </div>
            </section>
        );
    }
}