import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ClansList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clans: [],
    };
  }

  componentDidMount() {
    axios.get('/api/v1/clans').then((res) => {
      this.setState((prevState) => {
        return Object.assign({}, prevState, {
          clans: res.data.clans,
        });
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.clans.map(clan => (
          <ClansListItem key={clan._id} clan={clan} />
        ))}
      </div>
    );
  }
}

class ClansListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    axios.delete(`/api/v1/clans/${this.props.clan._id}`);
  }

  render() {
    const clan = this.props.clan;

    return (
      <div>
        <span>
          <Link to={`/clans/${clan._id}`}>{clan.name}</Link> - {clan.motto}
          <button onClick={this.onDelete}>DELETE</button>
        </span>
      </div>
    );
  }
}

export default ClansList;
