import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Containers/Container';
// import Footer from './components/Footer';
import FormArea from './components/Containers/FormArea';
// import Form from './components/Forms/Form';
import Divider from '@material-ui/core/Divider';


const App = () => {

  return (
    <div className="html">
      <Header />
      <Container />
      <Divider />
      <FormArea />
    </div>
  );
}

export default App;
