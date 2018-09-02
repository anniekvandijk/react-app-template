import React from 'react';
import PageWrapper from '../PageWrapper';

function About(props) {
  const { pageName } = props;
  return (
    <PageWrapper pageName={pageName}>
      <h1>About page</h1>
      <span>
        Here there can be some text about the application.
      </span>
    </PageWrapper>
  );
}

export default About;
