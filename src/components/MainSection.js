import React, { useState, useEffect } from 'react';
import courses from '../data/courses';
import testimonials from '../data/testimonials';

const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [randomTestimonials, setRandomTestimonials] = useState([]);

  useEffect(() => {
    // Get 3 random courses
    const randomCourses = [...courses].sort(() => 0.5 - Math.random()).slice(0, 3);
    setFeaturedCourses(randomCourses);

    // Get 2 random testimonials
    const randomTestis = [...testimonials].sort(() => 0.5 - Math.random()).slice(0, 2);
    setRandomTestimonials(randomTestis);
  }, []);

  return (
    <section>
      <h1>About LMS</h1>
      <p>Our Learning Management System provides courses and helps students enroll in them!</p>

      <h2>Featured Courses</h2>
      <div className="featured-courses">
        {featuredCourses.map(course => (
          <div key={course.id}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.instructor}</p>
          </div>
        ))}
      </div>

      <h2>Testimonials</h2>
      <div className="testimonials">
        {randomTestimonials.map((testi, index) => (
          <div key={index}>
            <p><strong>{testi.studentName}</strong> - {testi.courseName}</p>
            <p>{testi.review}</p>
            <p>{"★".repeat(testi.rating)}{"☆".repeat(5 - testi.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;
