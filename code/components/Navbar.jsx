"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import { usePathname } from "next/navigation";


function NavbarC({category}) {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="nav-bg">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image
              src="/images/download.png"
              alt="about img"
              width={50}
              height={50}
           />
           <h4 className="h3-color">Your News</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            <ul className="links">
            <li className="text-white"  onClick={()=>category('General')}>Home</li>
            <li onClick={()=>category('General')}>General</li>
            <li onClick={()=>category('Business')}>Business</li>
            <li onClick={()=>category('Sports')}>Sports</li>
            <li onClick={()=>category('Science')}>Science</li>
            <li onClick={()=>category('Entertainment')}>Entertainment</li>
            <li onClick={()=>category('Health')}>Health</li>
            <li onClick={()=>category('Technology')}>Technology</li>
            </ul>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarC;
