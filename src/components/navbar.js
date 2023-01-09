import Link from "next/link";
// import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark my--nav">
        <div className="container">
          <Link className="navbar-brand" href={'/'}>Suzanne Montgomery</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" href={'/shop'}>Shop</Link>
              <Link className="nav-link" href={'/bio'}>Bio</Link>
              <Link className="nav-link" href={'/gallery'}>Gallery</Link>
              <Link className="nav-link" href={'/contact'}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
