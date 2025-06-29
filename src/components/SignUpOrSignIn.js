import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


const SignUpOrSignIn = () => {


    const navigate = useNavigate()

    const handleRegister = () => {navigate('/register-to-make-payment')}
    const handleLogin = () => {navigate('/log-in-to-make-payment')}
    return (
        <div className="app">
        <Header/>
        <div class="signInOrSignUp">
            <h1>Aby dokończyć składanie zamówienia wykonaj jeden z poniższych kroków</h1>
    <div class="box">
      <h2>Nie masz jeszcze konta?</h2>
      <button onClick={handleRegister}>Zarejestruj się</button>
    </div>

    <div class="box">
        
      <h2>Masz już konto?</h2>
      <button onClick={handleLogin}>Zaloguj się</button>
    </div>
  </div>
        <Footer/>
        </div>
    )
}

export default SignUpOrSignIn