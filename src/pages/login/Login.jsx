import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Đăng Nhập</span>
      <form action="" className="loginForm">
          <label>Email</label>
          <input className="loginInput" type="text" placeholder="Enter your email..."/>
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..."/>
          <button className="loginButton">Đăng Nhập</button>
      </form>
          <button className="loginRegisterButton">Đăng Ký</button>
    </div>
  );
}
