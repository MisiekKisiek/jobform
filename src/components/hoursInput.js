import React from 'react';

//Components
import Helper from './helper';

//Styles
import formStyles from '../styles/form.module.scss';

const Hours = ({inputsAmount, formik}) => {

  const inputs = inputsAmount.map((input,index) => {
    
    const hoursHelper = <Helper popoverTitle={"Ilość godzin spędzonych przy dodatkowej pracy projektowej"} popoverContent={"Proszę wpisać orientacyjną liczbę godzin wszystkich prac dodatkowych dla przedmiotowej zmiany w projekcie."}/>

    return(
    <div>
        {index===inputsAmount.length - 1?hoursHelper:null}
        <label htmlFor={`hours[${index}].value`}>
          Ilość godzin <strong>/{formik.values.hours[index].position}/</strong>:
        </label>
        <input
          id={`hours[${index}].value`}
          type="number"
          name={`hours[${index}].value`}
          min="0"
          onChange={formik.handleChange}
          value={formik.values.hours[index].value}
        />
        <span className={formStyles.delete}>x</span>
      </div>
  )})
  return (<>
      {inputs}
  </>);
}

export default Hours;