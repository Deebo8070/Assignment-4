import React, { useContext } from 'react';
import EnrolledCourse from './EnrolledCourse';
import { EnrollmentContext } from './CoursesPage';
import './EnrollmentList.css';

function EnrollmentList() {
    const { enrolledCourses } = useContext(EnrollmentContext); // Consistently using 'enrolledCourses'
    const creditTotal = enrolledCourses.length * 3; // Total credit calculation

    return (
        <div>
            <h2 className="list-heading">Enrollment List</h2>
            <div className='list-container'>
                {enrolledCourses.map((course, index) => (
                    <EnrolledCourse key={index} name={course.name} id={course.id} /> // Ensure id is passed
                ))}
            </div>
            <p className="list-paragraph">Total Credit Hours: {creditTotal}</p>
        </div>
    );
}

export default EnrollmentList;
