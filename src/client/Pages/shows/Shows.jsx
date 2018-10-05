import React from 'react';
import PageWrapper from '../PageWrapper';
import AddShow from './AddShow';
import ShowsTable from './ShowsTable';

const Shows = () => (
  <PageWrapper>
    <h1>Alpaca shows</h1>
    <AddShow />
    <ShowsTable />
  </PageWrapper>
);

export default Shows;
