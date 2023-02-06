import { Container, Row, Pagination, PaginationItem,PaginationLink } from "reactstrap";
import AmbulanceCard from "components/cards/ambulanceCard";

const HomeHeader = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <div className="icon icon-shape text-white bg-success rounded-circle shadow mb-3">
              <i className="fas fa-plus"/>
            </div>
            <Row>
              <AmbulanceCard plate = {"ADC 255"} ubication = {{lat:20, lon:20}}/>
              <AmbulanceCard plate = {"ADC 255"} ubication = {{lat:20, lon:20}}/>
              <AmbulanceCard plate = {"ADC 255"} ubication = {{lat:20, lon:20}}/>
              <AmbulanceCard plate = {"ADC 255"} ubication = {{lat:20, lon:20}}/>
            </Row>

          <div className="d-flex justify-content-center mt-3">
              <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      previous
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
              
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      next
                    />
                  </PaginationItem>
                </Pagination>
          </div>


          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeHeader;
