import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

function App() {

  const message: string = "Learn React using TS"

  return (
   
<div>
  <Card color="primary" outline>
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</div>
  );
}

export default App;
