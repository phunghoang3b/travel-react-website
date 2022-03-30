import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1648569732645-a06e2a2ba8f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="" className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" name="" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Khai Nguyen"/>
          <label>Email</label>
          <input type="email" placeholder="KhaiNguyen@gmail.com"/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Cập Nhật</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
