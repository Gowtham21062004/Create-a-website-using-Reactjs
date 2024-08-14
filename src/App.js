import logo from './logo.svg';
import './App.css';
import React from 'react';
// let website={
//   color:"red",
//   backgroundColor:"green",
//   padding:"20px"
// }
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
class Res extends React.Component{
  render(){
    return(
    <>
    <Header />
    <Content />
    <Footer />
    
    </>
    );
  }
}

// function App() {
//   return (
//    <div>
//    <h1>Gowtham</h1>
//    <p className='para'>This is a sample website</p>
//    </div>
//   );
// }

// export default App;
export default Res;