import React, { useState, useEffect } from "react";
import queryString from 'query-string';

//Components
import MainForm from '../components/form.js';

//Styles
import titleStyles from '../styles/title.module.scss';

const MainPage = () => {

  const [caseTitle, setcaseTitle] = useState('');
  const [caseNumber, setcaseNumber] = useState('');

  useEffect(() => {
    const parsed = queryString.parseUrl(window.location.search, { arrayFormat: 'bracket' });
    if (parsed.query.title && parsed.query.number) {
      const title = parsed.query.title.replaceAll("_", " ");
      setcaseTitle(title);
      setcaseNumber(parsed.query.number);
    }

  }, []);

  return (<main>
    <div className={titleStyles.title}>
      <div>Tytuł sprawy:{` `}
        <span>{caseTitle}</span>
      </div>
      <div>Numer sprawy:{` `}
        <span>{caseNumber}</span>
      </div>
    </div>
    <MainForm title={caseTitle} number={caseNumber} />
  </main>);
}

export default MainPage;
