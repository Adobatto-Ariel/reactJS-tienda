import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <form>
        <input type="text" className="email" placeholder="Email" />
        <input type="password" className="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
