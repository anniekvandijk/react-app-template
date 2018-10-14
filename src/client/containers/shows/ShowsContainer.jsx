import React from 'react';
import AddEditShow from './AddEditShow';
import ShowsTable from './ShowsTable';
import AlertDialog from '../../components/dialogs/AlertDialog';

class ShowsContainer extends React.PureComponent {
  state = {
    alertDialogOpen: false,
    formDialogOpen: false
  };

  render() {
    const handle = () => {
      this.setState({ alertDialogOpen: false });
    };
    const alertDialogOpen = () => {
      this.setState({ alertDialogOpen: true });
    };
    const AlertDialogCancel = () => {
      this.setState({ alertDialogOpen: false });
    };
    const formDialogOpen = () => {
      this.setState({ formDialogOpen: true });
    };
    const formDialogCancel = () => {
      this.setState({ formDialogOpen: false });    
    };
    return (
      <div id="showscontainer">
        <AlertDialog
          title="Hello"
          alertDialogOpen={this.state.alertDialogOpen}
          handleOkClick={handle}
          handleCancelClick={AlertDialogCancel}
        >
          Hello
        </AlertDialog>
        <AddEditShow
          setAlertDialogOpen={alertDialogOpen}
        />
        <ShowsTable />
      </div>
    );
  }
}

export default ShowsContainer;
