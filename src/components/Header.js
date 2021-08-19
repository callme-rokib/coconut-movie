const Header = (props) => {
  return (
    <>
      <header className="p-3 bg-primary bg-gradient bg-opacity-75 text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none fs-2 fw-bold"
            >
              {props.text}
            </a>

            <div className="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
