import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const SimpleTable = ({classes, values = {}}) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>First name</TableCell>
          <TableCell>Hobbies</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={values.firstName}>
          <TableCell>{values.firstName}</TableCell>
          <TableCell>{values.hobbies}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default connect(state => ({
  values: getFormValues('My test form')(state)
}))(withStyles(styles)(SimpleTable));
