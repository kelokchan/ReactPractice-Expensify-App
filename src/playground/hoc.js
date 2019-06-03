// Higher Order Component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Admin info</h1>
    <p>{props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => <div>{props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not logged in</p>}</div>;
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="this is only viewed by admin" />,
  document.getElementById('app')
);
