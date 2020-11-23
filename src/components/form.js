import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import emailjs from 'emailjs-com';

//MaterialUI
import { Checkbox, CircularProgress } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Styles
import formStyles from '../styles/form.module.scss'


const MainForm = () => {

  const buttonText = useRef(null);
  const buttonProgress = useRef(null);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(50, 145, 153)',
        light: 'rgb(50, 145, 153)'
      },
      secondary: {
        main: 'rgb(50, 145, 153)',
        light: 'rgb(50, 145, 153)'
      },
    },
  });

  const sendingEmail = (e) => {
    e.preventDefault();
    console.log(e.target)
    // emailjs.sendForm('gmail', 'jobform_template', e.target, 'user_oLqtDjtcsA2vEbTzvK9CM')
    //   .then((result) => {
    //     console.log(result.text);
    //     buttonProgress.current.style.display = "none"
    //     buttonText.current.style.display = "block"
    //   }, (error) => {
    //     console.log(error.text);
    //     buttonProgress.current.style.display = "none"
    //     buttonText.current.style.display = "block"
    //   });
  }

  const formik = useFormik({
    initialValues: { firstname: '', surname: '', email: '', phone: '', hours: '', message: '', additionalInfo: '', checkbox: false },
    onSubmit: values => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      buttonProgress.current.style.display = "block"
      buttonText.current.style.display = "none";
      sendingEmail(values);
      formik.handleReset();
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={formik.handleSubmit} className={formStyles.form}>
        <div>
          <label htmlFor="firstname">Imię:</label>
          <input
            id="firstname"
            type="text"
          // onChange={formik.handleChange}
          // value={formik.values.firstname}
          />
        </div>
        <div>
          <label htmlFor="surname">Nazwisko:</label>
          <input
            id="surname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.surname}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="phone">Numer telefonu:</label>
          <input
            id="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <h3>Wywiad:</h3>
        <div>
          <label htmlFor="hours">Ilość godzin:</label>
          <input
            id="hours"
            type="number"
            min="0"
            onChange={formik.handleChange}
            value={formik.values.hours}
          />
        </div>
        <div>
          <label htmlFor="mesage">Opis prac:</label>
          <textarea
            id="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>
        <div>
          <label htmlFor="additionalInfo">Dodatkowe informacje:</label>
          <textarea
            id="additionalInfo"
            onChange={formik.handleChange}
            value={formik.values.additionalInfo}
          />
        </div>
        <div>
          <Checkbox color='primary' id="checkbox" checked={formik.values.checkbox} onChange={formik.handleChange} />

          <span>Rozumiem, że administratorem moich danych jest Multiconsult Polska Sp. z o.o. z siedzibą w Warszawie. Dane te będą wykorzystywane jedynie celem kontaktu z Projektantem w sprawie dodatkowych prac przy projektach dla opracowania S52.</span>
        </div>
        <button type="submit">
          <CircularProgress ref={buttonProgress} color='secondary' />
          <span ref={buttonText}>Wyślij</span>
        </button>
      </form>
    </ThemeProvider>
  );
}

export default MainForm;