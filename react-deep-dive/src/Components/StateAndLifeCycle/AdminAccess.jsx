import React from 'react';

export class AdminAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    }
  }

  updateAdminState = () => {
    this.setState((state) => {
      return {
        isAdmin: !state.isAdmin,
      };
    });
  }

  render() {
    if (this.state.isAdmin) {
      return (
        <div>
          <button type="button" onClick={this.updateAdminState}> Change admin state </button>
          <div>Admin state: { this.state.isAdmin.toString() }</div>
          <div>Access granted</div>
        </div>
      );
    }
    else {
      return (
        <div>
          <button type="button" onClick={this.updateAdminState}> Change admin state </button>
          <div>Admin state: { this.state.isAdmin.toString() }</div>
          <div>Access denied</div>
        </div>
      );
    }
  }
}