import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

import Aux from '../../hoc/Aux/Aux';

class Result extends Component {
  state = {
    reported: '',
  }

  report = async () => {
    const url = `https://www.headlightlabs.com/api/gcpd_report?api_key=${process.env.REACT_APP_HEADLIGHT_API}`;
    const response = await axios.post(url, this.props.result);

    this.setState({ reported: response.statusText });
  }

  render() {
    return (
      <Aux>
        <p>
          {this.props.percent_match} : {this.props.closest_match}
        </p>
        <p>
          { this.state.reported}
        </p>
        <Button
          onClick={() => this.report()}
          color="red"
        >Report
        </Button>
      </Aux>

    );
  }
}

Result.propTypes = {
  percent_match: PropTypes.number,
  closest_match: PropTypes.string,
  result: PropTypes.shape({}),
};

Result.defaultProps = {
  percent_match: null,
  closest_match: '',
  result: {},
};

export default Result;
