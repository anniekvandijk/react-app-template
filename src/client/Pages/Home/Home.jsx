import React from 'react';
import PageWrapper from '../PageWrapper';

function Home(props) {
  const { pageName } = props;
  return (
    <PageWrapper pageName={pageName}>
      <h1>Homepage</h1>
      <span>
        Some text
      </span>
    </PageWrapper>
  );
}

export default Home;
