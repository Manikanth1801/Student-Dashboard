
import { unix } from "moment";
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";


const Header = () => {
  var LmsSession = new Date(1616422560).toLocaleDateString();
  let t = 1616088987;
  let mili= t*1000;
  let dateObj = new Date(mili);
  console.log(dateObj.toLocaleString());
  // t.setSeconds(1445212800);
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Course Enrolled
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          RCEH 
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span> */}
                      {" "}
                      <span className="text-nowrap">Date enrolled 12-12-21</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
             
              
              
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Payment
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">Paid Amount 2500</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-rupee-sign" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span> */}
                      {" "}
                      <span className="text-nowrap">on 12/8/20</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Next EMI 
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2500</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-bell" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        {/* <i className="fas fa-arrow-up" /> 12% */}
                      </span>{" "}
                      <span className="text-nowrap">Next Due 25/5/21</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {
                <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0">
                                  <CardBody>
                                    <Row>
                                      <div className="col">
                                        <CardTitle
                                          tag="h5"
                                          className="text-uppercase text-muted mb-0"
                                        >
                                          Last LMS Access
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">2 Days Ago</span>
                                      </div>
                                      <Col className="col-auto mb-4 py-2">
                                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                          <i className="fas fa-clipboard-check" />
                                        </div>
                                      </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                      <span className="text-danger mr-2">
                                        <i className="fas fa-arrow-down" />
                                      </span>
                                      {" "}
                                      <span className="text-nowrap">{LmsSession}</span>
                                    </p>
                                  </CardBody>
                                </Card>
                              </Col>
              }
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
