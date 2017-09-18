import React from 'react';
import axios from 'axios';

class ClanRegister extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* eslint-disable class-methods-use-this */
  handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const inputs = form.elements;

    axios.post('/api/v1/clans', {
      bungieGroupId: inputs.groupId.value,
    }).then((response) => {
      form.reset();
    });
  }
  /* eslint-enable */

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="groupId" placeholder="Clan name" />

          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    );
  }
}

export default ClanRegister;
