import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
  return (
    <div className= "settings">
        <div className="settingswrapper">
         <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
          <span className="settingsdeletetitle">Delete Account</span>
         </div>
         <form  className="settingsform">
          <label>Profile Picture</label>
          <div className="settingspp">
            <img src="./image/board-2433982_1280.jpg" alt="" />
            <label htmlFor="fileinput">
            <i className="settingsppicon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="William" />
          <label>Email</label>
          <input type="email" placeholder="william@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingssubmit">Update</button>
         </form>
        </div>
        <Sidebar/>
    </div>
  )
}
