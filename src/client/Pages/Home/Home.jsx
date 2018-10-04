import React from 'react';
import PageWrapper from '../PageWrapper';
import AddShowFormContainer from '../shows/AddShowFormContainer';
import ShowsTable from '../shows/ShowsTable';

const Home = () => (
  <PageWrapper>
    <h1>Homepage</h1>
    <AddShowFormContainer />
    <ShowsTable />
  </PageWrapper>
);

export default Home;
