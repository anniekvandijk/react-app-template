import React from 'react';
import Header from '../components/app.components/Main/Header';

export default function About(props) {
  const { pageName } = props;
  return (
    <div>
      <Header pageName={pageName} />
      <h1>Hello at the Aboutpage!</h1>
    </div>
  );
}
