import React from 'react';
import CourseItem from './CourseItem';
import Courses from './data/courses';
import './CourseCatalog.css';

function CourseCatalog() {
    const courseItems = Courses.map((course) => <CourseItem key={course.id} id={course.id} name={course.name} instructor={course.instructor} description={course.description} />);
    return (
        <div>
            <h2 className="catalog-title">Course Catalog</h2>
            <div className="catalog-grid">
                {courseItems}
            </div>
        </div>
    );
}

export default CourseCatalog;