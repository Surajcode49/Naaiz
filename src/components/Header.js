import react from "react";
import logo from "../image/logo.png";

const Header = () => {
  return (
    <>
      <nav class="navbar " id="navv">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="/" width="35" height="35" />
            <p1 id="cloud">CLOUD KITCHEN</p1>
          </a>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <u>Our Kitchens</u>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign-in
              </a>
            </li>
            
            <button type="button" class="btn btn-outline-info">Request a Demo</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
