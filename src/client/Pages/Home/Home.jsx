import React from 'react';
import PageWrapper from '../PageWrapper';
import FormContainer from '../../Forms/TestForm/FormContainer';
import SimpleTable from '../../Forms/TestForm/FormTable';

const Home = () => (
  <PageWrapper>
    <h1>Homepage</h1>
    <FormContainer />
    <SimpleTable />
  </PageWrapper>
);

export default Home;
