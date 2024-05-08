import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IntelliMentor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="단어장" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">단어장 생성</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                단어장 목록
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">퀴즈 목록</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="스터디" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">나의 스터디</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                게시판 목록
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">스터디 모집</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="게시판" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">게시판 생성</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                게시판 목록
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">로그아웃</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              마이페이지
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicMenu;