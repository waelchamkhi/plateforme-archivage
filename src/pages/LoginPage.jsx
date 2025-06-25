// LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
