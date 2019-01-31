import React, { Fragment } from 'react';
import './styles.css';

const Columns = () => ([
  <th key='1' scope="col">Vlad</th>,
  <th key='2' scope="col">Max</th>
])

const SecondColumns = () => (
  <Fragment>
    <td style={{color: 'red', textTransform: 'uppercase'}}>Uppercase</td>
    <td className='table-text'>ClassName</td>
  </Fragment>
)

const Table = () => (
  <table className="table">
    <thead>
      <tr>
        <Columns />
      </tr>
    </thead>
    <tbody>
      <tr>
        <SecondColumns />
      </tr>
      <tr>
        <SecondColumns />
      </tr>
      <tr>
        <td>3</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
)

export default Table;