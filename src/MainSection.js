import './MainSection.css';
import React, { useEffect, useState } from 'react';
import Courses from './data/courses';
import Testimonials from './data/testimonials';

function MainSection() {
    const course1 = Courses[4]; 
    const course2 = Courses[2];
    const course3 = Courses[5]; 
    const [testimonial1, setTestimonial1] = useState(Testimonials[0]);
    const [testimonial2, setTestimonial2] = useState(Testimonials[0]);

    useEffect(() => {
        let num1 = Math.floor(Math.random() * Testimonials.length);
        const T1 = Testimonials[num1];
        let num2 = Math.floor(Math.random() * Testimonials.length);
        while (Math.abs(num1 - num2) < 1) {
            num2 = (num2 + 2) % Testimonials.length; // Shift by 2 to ensure difference
        }
        const T2 = Testimonials[num2];
        setTestimonial1(T1);
        setTestimonial2(T2);
    }, []);

    var stars1 = [...Array(5)].map((_, i) => i < testimonial1.rating ? "★" : "☆").join('');
    var stars2 = [...Array(5)].map((_, i) => i < testimonial2.rating ? "★" : "☆").join('');

    return (
        <div className="main-section">
            <h2 className="main-section__heading">About LMS</h2>
            <p className="main-section__paragraph">The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h3 className="main-section__subheading">Key Features:</h3>
            <div>
                <p className="main-section__paragraph">- Sign up for courses</p> {/* Slight wording change */}
                <p className="main-section__paragraph">- Complete quizzes</p> {/* Slight wording change */}
                <p className="main-section__paragraph">- Monitor leaderboards</p> {/* Slight wording change */}
            </div>
            <h3 className="main-section__subheading">Featured Courses:</h3>
            <div className="main-section__featured-courses">
                <div className="main-section__course-card">
                    <h3>{course1.name}</h3>
                    <p>Instructor: {course1.instructor}</p>
                    <p>Duration: {course1.duration}</p>
                    <p>Description: {course1.description}</p>
                </div>
                <div className="main-section__course-card">
                    <h3>{course2.name}</h3>
                    <p>Instructor: {course2.instructor}</p>
                    <p>Duration: {course2.duration}</p>
                    <p>Description: {course2.description}</p>
                </div>
                <div className="main-section__course-card">
                    <h3>{course3.name}</h3>
                    <p>Instructor: {course3.instructor}</p>
                    <p>Duration: {course3.duration}</p>
                    <p>Description: {course3.description}</p>
                </div>
            </div>
            <h3 className="main-section__subheading">Testimonials:</h3>
            <div className="main-section__testimonials">
                <div className="main-section__testimonial-card">
                    <h3>Student Name: {testimonial1.studentName}</h3>
                    <h3>Course Name: {testimonial1.courseName}</h3>
                    <p>Review: {testimonial1.review}</p>
                    <p>Rating: {stars1}</p>
                </div>
                <div className="main-section__testimonial-card">
                    <h3>Student Name: {testimonial2.studentName}</h3>
                    <h3>Course Name: {testimonial2.courseName}</h3>
                    <p>Review: {testimonial2.review}</p>
                    <p>Rating: {stars2}</p>
                </div>
            </div>
        </div>
    );
}

export default MainSection;