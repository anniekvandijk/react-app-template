import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../PageWrapper';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';
import AddButton from '../../components/Buttons/AddButton';

const Shows = () => {
  const openForm = () => {
    console.log('Click');
  };
  return (
    <PageWrapper>
      <div id="showcontainer">
        <Typography variant="display1" gutterBottom>
          Shows
        </Typography>
        <AddEditShow />
        <ShowsTable />
        <AddButton onClick={() => openForm()} />
      </div>
    </PageWrapper>
  );
};

export default Shows;
