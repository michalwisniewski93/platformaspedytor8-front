import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'


const Contact = () => {

const now = new Date();

const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0'); // miesiące są od 0 do 11
const year = now.getFullYear();

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const formatted = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;


const [nameandsurname, setNameandsurname] = useState('')
const [email, setEmail] = useState('')
const [messageContent, setMessageContent] = useState('')
const [tickets, setTickets] = useState([])


const handleMessage = (e) => {
e.preventDefault()
     

    const message = messageContent
    const time = formatted
    const status = false

    axios.post("http://localhost:5000/tickets", {nameandsurname, email, message, time, status})
        .then((response => setTickets([...tickets, response.data])))
        .catch(err => console.error('Error adding tickets', err))
    alert('Wiadomość została wysłana, dziękujemy.')
    setNameandsurname('')
    setEmail('')
    setMessageContent('')
    setTickets('')

}



    return (
        <div className="app">
        <Header/>
        <div className="contactPage">
            <h1>Kontakt</h1>
            <div className="contactData">
                <div className="contactDataInfo">
                    <h3>Skontaktuj się z nami:</h3>
                     <p>{String.fromCodePoint(0x1F4DE)} tel. +48 667 085 071</p>
                     <p>{String.fromCodePoint(0x1F4E7)} e-mail: spedytorszkolenia@gmail.com</p><br/>
                     <p>SpedytorSzkolenia.pl Michał Wiśniewski<br/>ul.Derdowskiego 9/17, 85-795 Bydgoszcz (Polska)
                     <br/> NIP: 5541012980</p>
                </div>
                <div className="contactFormContainer">
                    <h3>Formularz kontaktowy</h3>
                    <form action="">
                        Czas pisania wiadomości: {formatted}
                        <label htmlFor="">Imię i nazwisko:
                            <input type="text" value={nameandsurname} onChange={(e) => setNameandsurname(e.target.value)}/>
                        </label>
                        <label htmlFor="">Adres e-mail: 
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="">Treść wiadomości: 
                            <textarea name="" id="" value={messageContent} onChange={(e) => setMessageContent(e.target.value)}></textarea>
                        </label>
                        <button onClick={handleMessage}>Wyślij wiadomość {String.fromCodePoint(0x1F680)}</button>
                    </form>
                </div>
            </div>
           

            
        </div>
        <Footer/>
        </div>
    )
}

export default Contact