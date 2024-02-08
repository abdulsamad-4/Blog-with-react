import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
        <div className="topleft">
        <i className="topicon fa-brands fa-facebook-f"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-tiktok"></i>
        <i className="topicon fa-brands fa-x-twitter"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem"><Link to="/" className="link">HOME</Link></li>
                <li className="toplistitem"><Link to="/" className="link">ABOUT</Link></li>
                <li className="toplistitem"><Link to="/" className="link">CONTACT</Link></li>
                <li className="toplistitem"><Link to="/" className="link">WRITE</Link></li>
                <li className="toplistitem"><Link to="/" className="link">{user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="topright">
          {
            user ? (<img className="topimg" src="./image/balloon-991680_1280.jpg" alt="" />
            ) : (
              <>
              <ul className="toplist">
                <li className="toplistitem">
              <Link to="/login" className="link">LOGIN</Link>  </li>
              <li className="toplistitem">
              <Link to="/register" className="link">REGISTER</Link>
              </li>
            
              </ul>
              </>
            )
          }
            
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
