import React from 'react';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../PageWrapper';
import ShowContainer from '../shows/ShowContainer';

const Home = () => (
  <PageWrapper>
    <Typography variant="title" gutterBottom>
        Homepage
    </Typography>
    <ShowContainer />
  </PageWrapper>
);

export default Home;
