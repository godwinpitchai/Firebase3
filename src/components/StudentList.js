import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./StudentList.css"; // ✅ Import external CSS file

const StudentList = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase(app);
    const studentsRef = ref(db, "students");

    const unsubscribe = onValue(studentsRef, (snapshot) => {
      if (snapshot.exists()) {
        setStudentData(snapshot.val());
      } else {
        setStudentData({});
      }
    });

    return () => unsubscribe();
  }, []);

  const deleteData = (key) => {
    const db = getDatabase(app);
    const studentRef = ref(db, `students/${key}`);

    remove(studentRef)
      .then(() => {
        console.log("Student deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  return (
    <div className="container">
      <h1 className="title">🎓 Student List</h1>

      {studentData ? (
        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>Adm No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(studentData).map(([key, value], index) => (
                <tr key={key} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                  <td>{key}</td>
                  <td>{value.studentname}</td>
                  <td>{value.phoneNumber}</td>
                  <td className="action-buttons">
                    <button onClick={() => deleteData(key)} className="delete-button">
                      ❌ Delete
                    </button>
                    <button
                      onClick={() =>
                        navigate("/updatestudent", {
                          state: { admNo: key, studentName: value.studentname, phoneNumber: value.phoneNumber },
                        })
                      }
                      className="update-button"
                    >
                      ✏️ Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="loading-message">Loading students...</p>
      )}
    </div>
  );
};

export default StudentList;
