import React, { Fragment } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';


const App = ({ children }) => (
  <Fragment>
    <Header />
    <div className='text-center'>
      {children}
    </div>
    <Footer />
  </Fragment>
)

export default App;