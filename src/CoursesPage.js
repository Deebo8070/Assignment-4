import React, { useEffect, useState, createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';

// Create context
export const EnrollmentContext = createContext();

function EnrollmentProvider({ children }) {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // Load data from local storage when component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('enrolledCourses');
        if (storedData) {
            setEnrolledCourses(JSON.parse(storedData));
        }
    }, []);

    // Save to local storage whenever enrolledCourses updates
    useEffect(() => {
        if (enrolledCourses.length > 0) {
            localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        }
    }, [enrolledCourses]);

    return (
        <EnrollmentContext.Provider value={{ enrolledCourses, setEnrolledCourses }}>
            {children}
        </EnrollmentContext.Provider>
    );
}

function CoursesPage() {
    return (
        <EnrollmentProvider>
            <div className="courses-page">
                <Header />
                <div className="content">
                    <CourseCatalog />
                    <EnrollmentList />
                </div>
                <Footer />
            </div>
        </EnrollmentProvider>
    );
}

export default CoursesPage;
