import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const StudentsView = () => {
    const [students, setStudents] = useState([]);

	useEffect(() => {
		loadStudents();
	}, []);

	const loadStudents = async () => {
		const result = await axios.get(
			"http://localhost:9191/controller/getStudents",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 200) {
			setStudents(result.data);
		}
	};
    return (
        <section>
            <table className="table table-bordered table-hover">
                <thead>
                <tr className="text-center">
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <th scope='row' key={index}>
                                {index + 1}
                            </th>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                            <td className="mx-2">
                                <button
                                className="btn btn-info"
                                >View</button>
                                </td>
                            <td className="mx-2">
                            <button
                                className="btn btn-warning"
                                >Update</button>
                            </td>
                            <td className="mx-2">
                            <button
                                className="btn btn-danger"
                                >Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default StudentsView;