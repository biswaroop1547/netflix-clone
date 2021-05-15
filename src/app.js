import React, { Component }  from 'react';

import jumboData from './fixtures/jumbo'
import Jumbotron from '../src/components/jumbotron'

export default function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>Hello</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}


