import React from 'react';
import axios from 'axios';

class ClanMembersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }
  componentDidMount() {
    axios.get('/api/v1/clans/1/members').then((res) => {
      console.log(res);
      this.setState((prevState) => {
        return Object.assign({}, prevState, {
          members: res.data.Response.results,
        });
      });
    });
  }

  render() {
    return (
      <div>
        Members List
        <div>
          {this.state.members.map(member => (
            <ClanMembersListItem key={member.destinyUserInfo.membershipId} member={member} />
          ))}
        </div>
      </div>
    );
  }
}

function ClanMembersListItem({ member }) {
  console.log(member);

  return (
    <div>{member.destinyUserInfo.displayName}</div>
  );
}

export default ClanMembersList;
