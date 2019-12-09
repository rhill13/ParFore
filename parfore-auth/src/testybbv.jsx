<Navbar bg="success" variant="dark" expand="lg">
  <Navbar.Brand href="/">Parfore</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link tag={Link} to="/public">
        Home
      </Nav.Link>
      <Nav.Link href="/protected">Club Recommendation</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
