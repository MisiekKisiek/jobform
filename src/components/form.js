import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';

//MaterialUI
import { Checkbox } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Styles
import formStyles from '../styles/form.module.scss'


const MainForm = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: 'rgb(50, 145, 153)',
        light: 'rgb(50, 145, 153)'
      },
    },
  });

  const formik = useFormik({
    initialValues: { name: '', surname: '', email: '', phone: '',hours:'',message:'', checkbox: true  },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={formStyles.form}>
      <div>
        <label htmlFor="firstname">Imię:</label>
        <input
          id="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
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
        <label htmlFor="mesage">Ilość godzin:</label>
        <textarea
          id="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <Checkbox color='primary' id="checkbox" checked={formik.values.checkbox} onChange={formik.handleChange}/>
        </ThemeProvider>
        <span>Rozumiem, że administratorem moich danych jest Multiconsult Polska Sp. z o.o. Dane te będą wykorzystywane jedynie celem kontaktu z Projektantem w sprawie dodatkowych prac przy projektach dla opracowania S52.</span>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default MainForm;