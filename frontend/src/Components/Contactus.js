import React from 'react';

function Contactus() {
    return (
        <div>
            <div style={{ height: "200px" }}></div>
            <footer id="contactUs" className="page-footer font-small">

                <div className="container">
                    <div className="row pt-3 mb-5">
                        <div className="col-12">
                            <h1 style={{ textAlign: "center" }}> Contact Us </h1>
                            {/* <hr> */}
                        </div>
                    </div>


                    <div className="container text-center text-md-left ">

                        <div className="row">

                            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-3 mb-4">

                                <h5>Vikas Dongare</h5>
                                {/* <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto" style="width: 60px;"> */}
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> dongarevikas55@gmail.com</p>
                                {/* <p>
                                        <i className="fas fa-phone mr-3"></i> + 91 99750 93783</p> */}

                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-3 mb-4">

                                <h5>Mayur Badwaik</h5>
                                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"> */}
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> thebadwaikmayur@gmail.com</p>
                                {/* <p>
                                        <i className="fas fa-phone mr-3"></i> + 91 95038 93010</p> */}

                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h5>Khushal Bendkoli</h5>
                                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"> */}
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> bendkolikhushal10@gmail.com</p>
                                {/* <p>
                                        <i className="fas fa-phone mr-3"></i> + 91 96232 17110</p> */}

                            </div>

                            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h5>Parnavi Joshi</h5>
                                {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;"> */}
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> parnavijoshi00@gmail.com</p>
                                {/* <p>
                                        <i className="fas fa-phone mr-3"></i> + 91 88887 17513</p> */}

                            </div>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contactus;
