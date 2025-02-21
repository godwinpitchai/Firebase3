import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css"; // ✅ Import external CSS file

const AddStudent = () => {
  const [admNo, setAdmNo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const db = getDatabase(app);
    set(ref(db, "students/" + admNo), {
      studentname: name,
      phoneNumber: phone,
    })
      .then(() => {
        console.log("Data added successfully");
        navigate("/studentlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">➕ Add New Student</h2>
        <form onSubmit={submitHandler} className="form">
          <input
            className="form-input"
            onChange={(e) => setAdmNo(e.target.value)}
            type="text"
            placeholder="Admission Number"
            required
          />
          <input
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Student Name"
            required
          />
          <input
            className="form-input"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Phone Number"
            required
          />
          <button type="submit" className="form-button">
            Submit ✅
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
