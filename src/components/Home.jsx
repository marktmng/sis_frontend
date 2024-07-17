import React from 'react';

function Home(props) {

    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            marginTop: '200px',
        },
        heading: {
            color: '#333',
            borderBottom: '1px solid #ccc',
            paddingBottom: '10px',
        },
        subHeading: {
            color: '#555',
            marginTop: '20px',
        },
        paragraph: {
            color: '#666',
        },
        list: {
            listStyleType: 'disc',
            color: '#666',
            paddingLeft: '20px',
        },
        listItem: {
            marginBottom: '10px',
        }
    };
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Welcome to the Southern Institute of Studies (SIS) Web Application Development Project</h2>
            <p style={styles.paragraph}>As part of this project, we are developing a comprehensive web-based application for SIS, a leading educational institute in New Zealand. The application aims to streamline management processes for programs, lecturers, courses, students, and their academic records.</p>
            <h3 style={styles.subHeading}>Key Objectives:</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>Develop modules for Programs, Lecturers’ information, Students’ information, Student Marks, Students’ parent information, and tuition fees management.</li>
                <li style={styles.listItem}>Utilize Django for backend scripting and React JS for frontend development.</li>
                <li style={styles.listItem}>Implement continuous integration and deployment tools to automate testing, build, and deployment processes.</li>
                <li style={styles.listItem}>Evaluate and select appropriate package management software to ensure efficient application development and maintenance.</li>
            </ul>
        </div>
    );
}

export default Home;