/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";


import services from '../../services/login'
import userServices from '../../services/user'
import ambulanciaServices, {Dambulancia} from '../../services/ambulancia'

const handlerLogin = async() => {
  //oauth("login button")
  //const data = await (await services("")).data
  
  // Cuser
  //console.log(await (await userServices("")).data)
  //console.log(ambulanciaServices("",""))
  //console.log(await (await Dambulancia('63cc67664d2fb66bc4340bb7','Bearer eyJhbGciOiJIUzI1NiJ9.eyJkb2MiOnsiX2lkIjoiNjNhYzA3NzQ0ZTk5MjhlOWFmOWYxNDhjIiwibmFtZSI6ImRpZWdvIGF4c2VsIGdhcmNpYSBzaWVycmEiLCJhZ2UiOjIzLCJlbWFpbCI6ImRpZWdvQGdtYWlsLmNvbSIsInBhc3N3ZCI6IiQyYSQxMCRqNTBYN29JY0QwRWpEeEZzTVBmNERlNWE0UDU3dlQuVTZYTDVCVTFwUUpmRmxqU290NjlsLiIsInJvbCI6InVuYXNzaWduZWQiLCJpZF9hbWJ1bGFuY2lhIjpbIjYzYWMxNzcxMjc1YTc2Y2JiNGVjYTE0ZCIsIjYzYWM1MTQxNDRhMGVmMGJmMWFjZDk3MSJdLCJpZF9ncHMiOltdLCJjcmVhdGVkIjoiMjAyMi0xMi0yOFQwOTowODowNC40NjBaIn0sImV4cCI6MTY3NDM2MTk2NH0.Y-zfOaT4e-J2vq1mf4JF7j7QLXCyP0BqgyWFgr5WFVU')).data)
  window.location.href = "http://localhost:3000/home"
}

const Login = () => {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick = {handlerLogin}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
