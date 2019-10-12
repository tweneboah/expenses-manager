import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Header = ({match}) => {
    return (
        <div>
          <p>
          <Link to ='/dashboard'>Home</Link>
          </p>
          
          <p>
          <Link to ='/create'>Create</Link>
          </p>
          <p>
         <Link to ='/dashboard'>Dashboard</Link>
         </p>
        </div>
       
    );
};

export default withRouter(Header);