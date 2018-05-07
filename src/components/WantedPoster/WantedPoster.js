import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'semantic-ui-react';
import Classes from './WantedPoster.scss';

const WantedPoster = props => (
  <Card fluid color="blue" className={Classes.CardPoster} raised>
    <Image src={props.location} />
    <Card.Content>
      <Card.Header>{props.closest_match}</Card.Header>
      <Card.Meta>Percent Match: {props.percent_match}</Card.Meta>
      {/* <Card.Description>Closest match</Card.Description> */}
    </Card.Content>
    <Card.Content extra>
      <Button
        color="red"
      >Report
      </Button>
    </Card.Content>
  </Card>
);

WantedPoster.propTypes = {
  location: PropTypes.string.isRequired,
  closest_match: PropTypes.string.isRequired,
  percent_match: PropTypes.number.isRequired,
};

export default WantedPoster;
