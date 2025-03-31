import React, { useContext } from 'react';
import courselogo from './images/course1.jpg';
import { EnrollmentContext } from './CoursesPage'; 
import './EnrolledCourse.css';

function EnrolledCourse(props) {
    const { enrolledCourses, setEnrolledCourses } = useContext(EnrollmentContext); // Consistently using 'enrolledCourses'

    function dropCourse() {
        const updatedCourses = enrolledCourses.filter(course => course.id !== props.id);
        setEnrolledCourses(updatedCourses); // Removing course by id
    }

    return (
        <div className='enrolled-box'>
            <img src={courselogo} alt="Course Logo" />
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: 3</p>
            <button onClick={dropCourse}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;
