import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import {uid} from 'uid';

//Bootstrap
import { Form as FormBootstrap, Spinner } from 'react-bootstrap';

//Components
import Helper from './helper';
import HoursInputs from './hoursInput'

//Styles
import formStyles from '../styles/form.module.scss';

//Utils
import {designersPositions} from '../utils/designersPositions';


const MainForm = ({ title, number }) => {

  const [formikInitialValues, setformikInitialValues] = useState({ firstname: '', surname: '', email: '', phone: '', hours: [{value:0, position:'Starszy projektant'},{value:0, position:'Starszy projektant'}], message: '', additionalInfo: '' })

  const [designerPositionValue, setdesignerPositionValue] = useState(designersPositions.elderDesigner)

  const buttonText = useRef(null);
  const buttonProgress = useRef(null);

  const sendingEmail = (values) => {
    emailjs.send('gmail', 'jobform_template', values, 'user_oLqtDjtcsA2vEbTzvK9CM')
      .then((result) => {
        console.log(result.text);
        buttonProgress.current.style.display = "none"
        buttonText.current.style.display = "block"
      }, (error) => {
        console.log(error.text);
        buttonProgress.current.style.display = "none"
        buttonText.current.style.display = "block"
      });
  }

  const formik = useFormik({
    initialValues: {...formikInitialValues},
    onSubmit: values => {
      buttonProgress.current.style.display = "block"
      buttonText.current.style.display = "none";
      const param = Object.assign({}, values, { title: title }, { number: number })
      sendingEmail(param);
      formik.handleReset();
    }
  });

  const addHoursInput = async (e) => {
    e.preventDefault();
    const newVal = {...formik.values};
    newVal.hours.push({value:0,position: designerPositionValue, id: uid()});
    setformikInitialValues(newVal);
    setdesignerPositionValue(designersPositions.elderDesigner)
  }

  return (
    <form onSubmit={formik.handleSubmit} className={formStyles.form}>
      <h3>Dane projektanta</h3>
      <div>
        <label htmlFor="firstname">Imię:</label>
        <input
          id="firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
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
      <h3>Wywiad prac dodatkowych</h3>
      <HoursInputs inputsAmount={formikInitialValues.hours} formik={formik}/>
      <div>
        <select name="" id="" value={designerPositionValue} onChange={(e)=>{
          setdesignerPositionValue(e.target.value)
        }}>
          <option value={designersPositions.elderDesigner}>{designersPositions.elderDesigner}</option>
          <option value={designersPositions.designer}>{designersPositions.designer}</option>
          <option value={designersPositions.elderAssistant}>{designersPositions.elderAssistant}</option>
          <option value={designersPositions.assistant}>{designersPositions.assistant}</option>
          <option value={designersPositions.lesserAssistant}>{designersPositions.lesserAssistant}</option>
        </select>
        <button onClick={addHoursInput}>Dodaj stanowisko</button>
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
        <Helper popoverTitle={"Ilość godzin spędzonych przy dodatkowej pracy projektowej"} popoverContent={"Proszę wpisać orientacyjną liczbę godzin wszystkich prac dodatkowych dla przedmiotowej zmiany w projekcie."}/>
        <label htmlFor="additionalInfo">Dodatkowe informacje:</label>
        <textarea
          id="additionalInfo"
          onChange={formik.handleChange}
          value={formik.values.additionalInfo}
        />
      </div>
      <div>
        <FormBootstrap.Check
          required
          type="checkbox"
          className="my-1 mr-sm-2"
          id="checkbox"
          custom
        />
        <span>Rozumiem, że administratorem moich danych jest Multiconsult Polska Sp. z o.o. z siedzibą w Warszawie. Dane te będą wykorzystywane jedynie celem kontaktu z Projektantem w sprawie dodatkowych prac przy projektach dla opracowania S52.</span>
      </div>
      <button type="submit">
        <Spinner animation="border" variant="info" ref={buttonProgress} />
        <span ref={buttonText}>Wyślij</span>
      </button>
    </form>
  );
}

export default MainForm;