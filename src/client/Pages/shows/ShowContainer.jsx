import React from 'react';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';
import AddButton from '../../components/Buttons/AddButton';

const ShowContainer = () => {
  const openForm = () => {
    console.log('Click');
  };
  return (
    <div id="showcontainer">
      <AddEditShow />
      <ShowsTable />
      <AddButton onClick={() => openForm()} />
    </div>
  );
};

export default ShowContainer;
