import './Login.css';


function Login (){

    return (
        <div>
        <form>
            <div>
                <img/>
            </div>
            <div> 
            <div className="heading">
                <h2>Welcome Back !</h2>
                <p>Login to get started.</p>
            </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email"  required="required"/>
                </div>
                <div className="form-group">
                    <label> Password<span>*</span></label>
                    <input type="password" name="password"  required="required"/>
                </div>
                <div className="form-group buttons">
                    <button className="log_btn" name="logbtn" type="submit">Login</button>
                    <a href="login.php" > Don't have an account? Register</a>
                </div>
            </div>
        </form>
      </div>

    )
}

export default Login;