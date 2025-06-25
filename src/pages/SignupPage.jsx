// SignupPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        {/* Optional: Select role */}
        {/* <div className="mb-3">
          <label className="form-label">Role</label>
          <select className="form-select">
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}
        <button type="submit" className="btn btn-success w-100">Create Account</button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
