import React, { useEffect, useState } from 'react';
import '../styles/basket.css'; // Import stylów
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      try {
        setBasket(JSON.parse(storedBasket));
      } catch (error) {
        console.error('Błąd parsowania basket z localStorage:', error);
        setBasket([]);
      }
    }
  }, []);

  function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

  const handleRemove = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  const totalPrice = basket.reduce((sum, item) => sum + parseFloat(item.price), 0);

  if (basket.length === 0) {
    return <p>Koszyk jest pusty.</p>;
  }



  const handleBuyNow = () => {
    const userCookie = getCookie('user')
    if(userCookie){
      navigate('/payment') 
    }else{
      navigate('/sign-up-or-sign-in')
    }
  }

  return (
<div className="app">
        <Header/>
        <div className="basketPresentationField">
      <h1>Twój koszyk</h1>

      {/* Widok tabeli (desktop) */}
      <table className="basket-table">
        <thead>
          <tr>
            <th>Okładka kursu</th>
            <th>Tytuł</th>
            <th>Autor</th>
            <th>Cena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basket.map(item => (
            <tr key={item.id}>
              <td>
                <img
                  src={`http://localhost:5000/${item.imageurl}`}
                  alt={item.title}
                  style={{ width: '80px', height: 'auto' }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.price} zł</td>
              <td><button onClick={() => handleRemove(item.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Widok listy (mobile) */}
      <ul className="basket-list">
        {basket.map(item => (
          <li key={item.id} className="basket-list-item">
            <img
              src={`http://localhost:5000/${item.imageurl}`}
              alt={item.title}
              style={{ width: '100px', height: 'auto' }}
            />
            <div><strong>{item.title}</strong></div>
            <div>{item.author}</div>
            <div>{item.price} zł</div>
            <button onClick={() => handleRemove(item.id)}>X</button>
          </li>
        ))}
      </ul>

      <hr />
      <div className="payment-summary">
          <p><strong>Do zapłaty: {totalPrice.toFixed(2)} zł</strong></p>
          <button className="buyNowButton" onClick={handleBuyNow}>Zapłać teraz</button>
      </div>
    </div>
        <Footer/>
        </div>



    
  );
};

export default Basket;
