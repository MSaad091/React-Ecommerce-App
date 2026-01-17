import React, { useState } from "react";
import '../Stylesheets/Form.css'
import { useSelector } from "react-redux";

function Login() {
  const total = useSelector((state) => state.cartfunc.total)
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="login-card">
        <form className="form" onSubmit={handlePay}>
          <div className="logo"></div>
          <h2 className="header">Welcome Back!</h2>

          {/* Only show inputs if payment not successful */}
          {!success && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Total Price</label>
                <input 
                  type="text" 
                  value={`$${total}`}  
                  className="input" 
                  placeholder="Total Price" 
                  readOnly 
                />
              </div>
            </>
          )}

          <button type="submit" className="button pay-btn" disabled={loading || success}>
            {loading ? "Processing..." : success ? "Paid" : "Pay Bill"}
          </button>

          {success && (
            <p className="success-message">🎉 Congrats! Payment Successful!</p>
          )}

          <p className="footer">
            Don&apos;t have an account?
            <a href="/" className="link"> Sign up, it&apos;s free!</a>
            <br />
            <a href="/" className="link"> Forgot password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
