import React from 'react';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { Chart } from './components/Chart/Chart';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fatchedData = await fetchData();

    this.setState({ data: fatchedData });
  }

  handleCountryChange = async (country) => {
    const fatchedData = await fetchData(country);

    this.setState({ data: fatchedData, country: country });

    console.log(fatchedData);
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt='COVID-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
