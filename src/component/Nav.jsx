import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="img/ads_logo.png" width="100" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/Google_Ads" className="nav-link">Google_Ads</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/Facebook_Ads" className="nav-link">Facebook_Ads</Link>
            </li>
            <li className="nav-item mx-2">
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0" />
            </li>
            <li className="nav-item mx-2">
              <a href="tel:0956650050" className="btn btn-primary">โทร-0956650050</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
