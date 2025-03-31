import React, { useState, useContext } from 'react';
import courselogo from './images/course2.jpg';
import { EnrollmentContext } from './CoursesPage'; 
import './CourseItem.css';

function CourseItem(props) {
    const { enrolledCourses, setEnrolledCourses } = useContext(EnrollmentContext); // Consistently using 'enrolledCourses'
    const [showDescription, setShowDescription] = useState(false);

    function handleHoverIn() {
        setShowDescription(true);
    }

    function handleHoverOut() {
        setShowDescription(false);
    }

    function handleEnroll() {
        let exists = enrolledCourses.some(course => course.id === props.id); // Checking if course is already enrolled
        if (!exists) {
            setEnrolledCourses([...enrolledCourses, props]); // Add course to enrolled courses if not already enrolled
        } else {
            alert("You're already enrolled in this course!");
        }
    }

    return (
        <div className="course-box" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img src={courselogo} alt="Course Image" />
            <p>Course Name: {props.name}</p>
            <p>Instructor: {props.instructor}</p>
            {showDescription && <p>Description: {props.description}</p>}
            <button onClick={handleEnroll}>Enroll Now</button>
        </div>
    );
}

export default CourseItem;
