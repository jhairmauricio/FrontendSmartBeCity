import { Col, Card, CardBody, Row, CardTitle, CardFooter } from "reactstrap";


function AmbulanceCard(props) {


console.log(props)

return (    
        <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                        <Row>
                        <div className="col">
                            <CardTitle
                            tag="h3"
                            className="text-uppercase text-muted mb-0"
                            >
                            {props.plate}
                            </CardTitle>
                        </div>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                            ubicación actual 
                        </span>{" "}
                        <span className="text-nowrap">{`${props.ubication.lat},${props.ubication.lon}`}</span>
                        </p>
                </CardBody>

                <CardFooter>
                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow ">
                        <i className="fas fa-trash-alt"/>
                    </div>
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow ml-3">
                        <i className="fas fa-wrench"/>
                    </div>
                </CardFooter>
                
            </Card>
        </Col>);
}

export default AmbulanceCard;