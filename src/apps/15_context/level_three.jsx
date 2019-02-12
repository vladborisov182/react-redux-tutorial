import React, { Fragment } from 'react';
import { TitleContext } from './lesson';


const LevelThree = () => (
  <TitleContext.Consumer>
    { 
      ({ title, subTitle}) => (
      <Fragment>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </Fragment>
    )}
  </TitleContext.Consumer>
)

export default LevelThree;