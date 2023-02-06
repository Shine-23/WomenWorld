/**
 *
 * ComingSoon
 *
 */

import React from 'react';

const ComingSoon = props => {
  return (
    <div className='coming-soon'>
      <h3>Coming Soon</h3>
      {props.children}
    </div>
  );
};

export default ComingSoon;
