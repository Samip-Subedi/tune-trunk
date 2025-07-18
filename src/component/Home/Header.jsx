import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/Logo_trunk.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.favourite);
  const switcherTab = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.pageYOffset > 100) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="Header">
      <div className="Header__topbar flex space__between" style={{ padding: "10px 20px" }}>
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Khelkud Logo"
              style={{ width: "120px", height: "80px", cursor: "pointer" }}
            />
          </Link>
        </div>

        <nav className="navbar flex" ref={switcherTab} style={{ flex: 1, justifyContent: "center", marginRight: "30px" }}>
          <ul className="navigation" style={{ display: "flex", alignItems: "center", listStyle: "none", padding: 0, margin: 0 }}>
            {[{ path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/Products", label: "Products" },
              { path: "/faq", label: "FAQ" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.path} className="nav-item" style={{ margin: "0 25px" }}>
                <Link to={link.path} className="nav-link" style={{
                  padding: "10px 15px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontSize: "16px",
                  color: "#4b4b4b",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rightOptions flex align__items__center" style={{ justifyContent: "flex-end", gap: "20px" }}>
          <Link to="/search" className="icon" style={{ margin: "0 15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>

          <Link to="/favourites" className="icon relative" style={{ margin: "0 15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <span className="badge" style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "#785727", color: "#fff", borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {favouriteItems.length}
            </span>
          </Link>

          <Link to="/cart" className="icon relative" style={{ margin: "0 15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span className="badge" style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "#785727", color: "#fff", borderRadius: "50%", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {cartItems.length}
            </span>
          </Link>

          <Link to="/login" className="icon" style={{ margin: "0 15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
