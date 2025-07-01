import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');

    if (!sessionId) {
      // Brak sessionId - przekieruj
      navigate('/', { replace: true });
      return;
    }

    // Zapytaj backend o status płatności
    fetch(`http://localhost:5000/check-payment-status?sessionId=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        if (data.paid) {
          // Płatność OK - ustaw flagę i pobierz klientów
          sessionStorage.setItem('paymentStarted', 'true');

          axios.get('http://localhost:5000/customers')
            .then((response) => {
              setCustomers(response.data);
            })
            .catch((err) => {
              console.log('error fetching customers, error: ' + err);
              // Jeśli nie da się pobrać klientów, przekieruj
              navigate('/', { replace: true });
            });
        } else {
          // Płatność nieudana - przekieruj
          navigate('/', { replace: true });
        }
      })
      .catch(() => {
        // Błąd fetch - przekieruj
        navigate('/', { replace: true });
      });
  }, [location, navigate]);

  useEffect(() => {
    // Ta logika wykona się dopiero, gdy mamy customers i paymentStarted
    const paymentStarted = sessionStorage.getItem('paymentStarted');

    if (!paymentStarted) {
      // Nie było płatności - przekieruj
      navigate('/', { replace: true });
      return;
    }

    if (customers.length === 0) {
      // Jeszcze nie ma klientów, czekaj
      return;
    }

    const foundUser = getCookie('user');
    if (!foundUser) {
      // Nie znaleziono user cookie, przekieruj
      navigate('/', { replace: true });
      return;
    }

    const login = foundUser.split(';')[0];
    const myUser = customers.find(customer => customer.login === login);

    if (!myUser) {
      console.warn('Nie znaleziono użytkownika o loginie:', login);
      navigate('/', { replace: true });
      return;
    }

    const oldAccesses = myUser.accesses || '';
    const editingId = myUser._id;
    const newAccesses = getCookie('newaccesses') || '';

    const finalAccesses = oldAccesses + (oldAccesses ? ';' : '') + newAccesses;

    axios.put(`http://localhost:5000/customers/${editingId}`, { accesses: finalAccesses })
      .then(() => {
        deleteCookie('newaccesses');
        // Możesz tu wyczyścić flagę płatności jeśli chcesz,
        // aby użytkownik nie mógł odświeżać strony i ponownie robić update
        sessionStorage.removeItem('paymentStarted');
      })
      .catch((err) => console.error("Error updating customer accesses:", err));

  }, [customers, navigate]);

  return <h1>Przetwarzanie płatności...</h1>;
};

export default SuccessPage;
