import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../PageWrapper';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';


const Shows = () => (
  <PageWrapper>
    <div id="showcontainer">
      <Typography variant="display1" gutterBottom>
        Shows
      </Typography>
      <AddEditShow />
      <ShowsTable />
    </div>
  </PageWrapper>
);

export default Shows;
