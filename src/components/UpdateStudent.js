import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";
import "./UpdateStudent.css"; // ✅ Import external CSS file

const UpdateStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract data from location.state
  const { admNo, studentName, phoneNumber } = location.state || {};

  const [updatedAdmNo, setUpdatedAdmNo] = useState(admNo || "");
  const [updatedName, setUpdatedName] = useState(studentName || "");
  const [updatedPhone, setUpdatedPhone] = useState(phoneNumber || "");

  const submitHandler = (event) => {
    event.preventDefault();

    const db = getDatabase(app);
    set(ref(db, "students/" + updatedAdmNo), {
      studentname: updatedName,
      phoneNumber: updatedPhone,
    })
      .then(() => {
        console.log("Data updated successfully");
        navigate("/studentlist");
      })
      .catch((err) => {
        console.log("Error updating student:", err);
      });
  };

  return (
    <div className="update-container">
      <div className="update-card">
        <h1 className="update-title">Update Student</h1>
        <form onSubmit={submitHandler} className="update-form">
          <label>Admission No.</label>
          <input
            value={updatedAdmNo}
            onChange={(e) => setUpdatedAdmNo(e.target.value)}
            type="text"
            placeholder="Admission Number"
            required
          />

          <label>Student Name</label>
          <input
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            type="text"
            placeholder="Student Name"
            required
          />

          <label>Phone Number</label>
          <input
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
            type="number"
            placeholder="Phone Number"
            required
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
