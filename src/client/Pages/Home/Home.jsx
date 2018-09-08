import React from 'react';
import PageWrapper from '../PageWrapper';
import Counter from '../Test/Counter';

function Home() {
  return (
    <PageWrapper>
      <h1>Homepage</h1>
      <span>
        <Counter />
      </span>
    </PageWrapper>
  );
}

export default Home;
