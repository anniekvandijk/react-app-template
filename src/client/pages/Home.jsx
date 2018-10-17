import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../main/PageWrapper';
import ShowsContainer from '../containers/ShowsContainer';

const Home = () => (
  <PageWrapper>
    <Typography variant="display1" gutterBottom>
        Homepage
    </Typography>
    <ShowsContainer />
  </PageWrapper>
);

export default Home;
