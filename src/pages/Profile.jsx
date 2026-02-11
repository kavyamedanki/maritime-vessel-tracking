import { useState } from "react";

function Profile() {
  const [user] = useState({
    fullname: "John Doe",
    username: "johndoe123",
    email: "john@example.com",
    role: "Operator",
    joined: "10-Feb-2026",
  });

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>User Profile</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        <div><strong>Full Name:</strong> {user.fullname}</div>
        <div><strong>Username:</strong> {user.username}</div>
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Role:</strong> {user.role}</div>
        <div><strong>Joined:</strong> {user.joined}</div>
      </div>

      <button style={{ marginTop: "20px", padding: "10px" }}>
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
