import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
          <Link to ='/dashboard'>Dashboard</Link>
        </div>
       
    );
};

export default withRouter(Header);