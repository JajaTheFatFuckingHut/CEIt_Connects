import React, { useState } from 'react';

function PasswordField() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-cont">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button 
        type="button" 
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}
