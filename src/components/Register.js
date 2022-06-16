import "./Register.css";
import Login from './Login';

function Register() {
    
    return (
      <div>
        <form>
            <div>
                <img/>
            </div>
            <div> 
            <div className="heading">
                <h2>Welcome to CommerceCloud</h2>
                <p>Create an account for a better shopping experience</p>
            </div>
                <div className="form-group">
                    <label>First Name<span>*</span></label>
                    <input type="text" name="name"  required="required"/>
                </div>
                <div className="form-group">
                    <label>Last Name<span>*</span></label>
                    <input type="text" name="name"  required="required"/>
                </div>
            <div >
                <div className="form-group">
                    <label> Email<span>*</span></label>
                    <input type="text" name="email"  required="required"/>
                </div>
            </div>
            <div >
                <div className="form-group">
                    <label> Password<span>*</span></label>
                    <input type="password" name="password" placeholder="" required="required"/>
                </div>
            </div>
            <div >
                <div className="form-group">
                    <label>Confirm Password<span>*</span></label>
                    <input type="password" name="cpassword" placeholder="" required="required"/>
                </div>
            </div>
                <div className="form-group buttons">
                    <button className="reg_btn" name="regbtn" type="submit">Register</button>
                    <a href="https://www.pluralsight.com/guides/understanding-links-in-reactjs"> Already have an account? login</a>
                </div>
            </div>
    </form>
      </div>
    );
}

export default Register;
