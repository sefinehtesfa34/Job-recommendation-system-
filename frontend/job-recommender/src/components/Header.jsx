function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          backgroundColor: "#4C1515",
          textAlign: "center",
        }}
      >
        <a
          className="navbar-brand"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "white",
            paddingBottom: "1rem",
            marginRight: "3rem",
            marginLeft: "3rem",
          }}
          href="/"
        >
          Jobfit
        </a>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <ul
          className="navbar-nav mr-auto"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white",
                paddingBottom: "1rem",
                marginLeft: "28rem",
              }}
              href="/"
            >
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{
                color: "white",
                paddingBottom: "1rem",
                marginLeft: "10rem",
              }}
              href="/"
            >
              SignUp
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{
                color: "white",
                paddingBottom: "1rem",
                marginLeft: "10rem",
              }}
              href="/"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div className="job-body">
        <p>
          Find the perfect jobs for your career <br />
          based on your best fit background
        </p>
      </div>
      <div className="white-body">
        <p>The most popular jobs</p>
      </div>
    </div>
  );
}

export default Header;
