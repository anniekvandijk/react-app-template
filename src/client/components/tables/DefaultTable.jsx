import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditButton from '../Buttons/EditButton';
import Loader from '../Loader';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: '5px'
  },
  table: {
    width: '100%'
  }
});

const DefaultTable = (props) => {
  const { classes, data, handleTableEditClick } = props;
  if (data === null) {
    return (
      <Loader />
    );
  }

  const updateAction = (id) => {
    handleTableEditClick(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell name="tableheader name">Name</TableCell>
            <TableCell name="tableheader location">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(d => (
            <TableRow key={d.id} name={d.id}>
              <TableCell>
                <EditButton onClick={() => updateAction(d.id)} />
              </TableCell>
              <TableCell name={d.name}>{d.name}</TableCell>
              <TableCell name={d.location}>{d.location}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
};

DefaultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  handleTableEditClick: PropTypes.func.isRequired,
  data: PropTypes.array
};

DefaultTable.defaultProps = {
  data: null
};

export default withStyles(styles)(DefaultTable);
