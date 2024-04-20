import { Children, useState } from "react";
import OpenNav from "../../assets/svg/openNav";
import "./index.scss";
import logo from "../../assets/png/red and black logo 1.png";
import CloseNav from "../../assets/svg/closeNav";
import { useLocation } from "react-router-dom";
import NavDesign from "../../assets/svg/navDesign";

const HeaderWrap = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div id="top" className="headerWrap">
      <div className="mobileNav">
        <div className="navContain">
          <div className="top">
            <div
              className="logo"
              onClick={() => {
                console.log("clicked");
                window.location.href = "/";
              }}
            >
              <img src={logo} alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className="navControl">
              {open ? <CloseNav /> : <OpenNav />}
            </div>
          </div>
          <div className="bottom">
            {open && (
              <ul>
                <a href="/" className={location.pathname === "/" && "active"}>
                  HOME
                </a>
                <a
                  href="#services"
                  className={location.includes("services") && "active"}
                >
                  SERVICES
                </a>
                <a
                  href="/team"
                  className={location.pathname === "/team" && "active"}
                >
                  TEAM
                </a>
                <a
                  href="/contact"
                  className={location.pathname === "/contact" && "active"}
                >
                  CONTACT US
                </a>
              </ul>
            )}
          </div>
        </div>

        {open && <div onClick={() => setOpen(!open)} className="cover"></div>}
      </div>
      <div className="desktopNav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navLinks">
          <a href="/">
            <span>HOME</span>
            {location.pathname === "/" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </a>
          <a href="/#services">
            <span>SERVICES</span>
            {location.pathname?.includes("services") && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </a>
          <a href="/team">
            <span>TEAM</span>
            {location.pathname === "/team" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </a>
          <a href="/contact">
            <span>CONTACT US</span>
            {location.pathname === "/contact" && (
              <div className="active">
                <NavDesign />
              </div>
            )}
          </a>
          <a className="hire" href="/hire">
            Hire us
          </a>
        </div>
      </div>
      {/* {children} */}
    </div>
  );
};
export default HeaderWrap;
