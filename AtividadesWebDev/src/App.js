import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import MyProps01 from './components/atividade00/02MeusDados';
import { CelsiusParaFarenheit, FarenheitParaCelsius, KelvinParaFarenheitECelsius } from './components/atividade00/03Temperatura';
function App() {
  return (
    <div className={styles.app}>
      <MyProps01
      nome = "Fillipe Leornes Bruno e Silva"
      curso = "Ciência da Computação"
      universidade = "UFC"
      />
      <CelsiusParaFarenheit
      celcius = "32"
      />
      <FarenheitParaCelsius
      farenheit = "32"
      />
      <KelvinParaFarenheitECelsius
      kelvin = "300"
      />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string,
};

export default App;

