import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'


const Courses = () => {
    const [courses, setCourses] = useState([])

     useEffect(() => {
        axios.get('http://localhost:5000/salessites')
        .then((response) => setCourses(response.data))
        .catch((err) => console.log('error fetching courses, error: ' + err))
    }, [])


    const handleDisplayMore = () => {

    }

    



    return (
        <div className="app">
                <Header/>
                <div className="courses">
                    <h1>Kursy z certyfikatem</h1>
                    <div className="coursesContent">
                        {courses.map(course => <div className="coursesContentItem" key={course._id}>
                         <img src={`http://localhost:5000/${course.imageurl}`} alt={course.title} />
                         <h1 onClick={handleDisplayMore}>{course.title}</h1>
                         <h4 onClick={handleDisplayMore}>{course.price} zł</h4>
                         <button onClick={handleDisplayMore}>Zobacz więcej</button>
                        </div>)}
                    </div>
                 </div>
                <Footer/>
        </div>
    )
}

export default Courses