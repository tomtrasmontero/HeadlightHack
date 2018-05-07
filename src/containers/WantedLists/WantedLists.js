import React, { Component } from 'react';
import axios from 'axios';
import { Container, Segment, Header, Icon, Grid } from 'semantic-ui-react';

import Classes from './WantedLists.scss';
import WantedPoster from '../../components/WantedPoster/WantedPoster';

class WantedLists extends Component {
  state = {
    wantedList: [],
  }

  componentDidMount() {
    this.getWantedList();
  }

  getWantedList = async () => {
    const url = 'https://angular5-91f56.firebaseio.com/data.json';
    const response = await axios.get(url).catch((err) => {
      console.log(err, 'something happened with firebase');
    });
    console.log(Object.entries(response.data));
    this.setState({ wantedList: Object.entries(response.data) });
  }

  render() {
    let list = <div>Silent Guardian has not detected any bad guys!</div>;
    if (this.state.wantedList.length) {
      list = this.state.wantedList.map(ele => (
        <Grid.Column key={ele[0]} computer={8} mobile={16}>
          <WantedPoster
            {...ele[1]}
          />
        </Grid.Column>
      ));
    }

    return (
      <div className={Classes.WantedLists}>
        <Segment>
          <Header textAlign="center" icon>
            <Icon name="spy" />
            Wanted List
            <Header.Subheader>
              List of suspected individuals captured by Silent Guardian
            </Header.Subheader>
          </Header>
          <Container fluid>
            <Grid>
              <Grid.Row >
                { list }
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default WantedLists;
