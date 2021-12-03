import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Admin.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome to admin page!</h1>
    </Card>
  );
};

export default Home;
