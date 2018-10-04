import React from 'react';
import PageWrapper from '../PageWrapper';
import AddShowFormContainer from './AddShowFormContainer';
import ShowsTable from './ShowsTable';

const Shows = () => (
  <PageWrapper>
    <h1>Alpaca shows</h1>
    <AddShowFormContainer />
    <ShowsTable />
  </PageWrapper>
);

export default Shows;
