import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const SingleCourse = () => {

    const title = useSelector(state => state.temporaryCourseTitle)
    const imageurl = useSelector(state => state.temporaryCourseImageUrl)
    const numberoflessons = useSelector(state => state.temporaryCourseNumberOfLessons)
    const price = useSelector(state => state.temporaryCoursePrice)
    const pricebeforethirtydays = useSelector(state => state.temporaryCoursePriceBeforeThirtyDays)
    const salescontent = useSelector(state => state.temporaryCourseSalesContent)
    const linktoyoutube = useSelector(state => state.temporaryCourseLinkToYoutube)
    const contentlist = useSelector(state => state.temporaryCourseContentList)
    const author = useSelector(state => state.temporaryCourseAuthor)


    const navigate = useNavigate()


useEffect(() => {
    if(title === '' || imageurl === '' || numberoflessons === '' || price === 0 || price === '' || pricebeforethirtydays === 0 || pricebeforethirtydays === '' || salescontent === '' || linktoyoutube === '' || contentlist === '' || author === '')
    {
        navigate('/kursy')
    }
}, [])

    return(

        <div className="app">
                <Header/>
                <div className="singleProductPresentation">
                   <div className="topProductPresentation">
                    <div className="productPresentationImage">
                        <img src={`http://localhost:5000/${imageurl}`} alt={title} />
                   </div>
                   <div className="productPresentationPrimaryData">
                        <h2>{title}</h2>
                        <h5>liczba lekcji: {numberoflessons} autor: {author}</h5>
                        <button>Kup teraz {price} zł</button>
                        <button>Dodaj do koszyka</button>
                        <h5>Najniższa cena w ostatnich 30 dniach: {pricebeforethirtydays} zł</h5>
                   </div>
                   </div>
                   <div className="middleProductPresentation">
                    <div className="productPresentationSecondaryData">
                        <div  dangerouslySetInnerHTML={{ __html: salescontent }} />
                    </div>
                    <div className="productPresentationCourseContentList">
                        <h3>Lista materiałów w tym kursie: </h3>
                        <div  dangerouslySetInnerHTML={{ __html: contentlist }} />
                    </div>
                   </div>
                 </div>
                <Footer/>
        </div>
    )
}

export default SingleCourse