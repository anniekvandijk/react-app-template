import React from 'react';
import PageWrapper from '../PageWrapper';
import AddShow from '../shows/AddShow';
import EditShow from '../shows/EditShow';
import ShowsTable from '../shows/ShowsTable';

const Home = () => (
  <PageWrapper>
    <h1>Homepage</h1>
    {/* <AddShowFormContainer /> */}
    <EditShow />
    <ShowsTable />
  </PageWrapper>
);

export default Home;
