import React from 'react';

import { TheContext } from './new-page';

const FinalChild = props => {
  return (
    <div>
      <TheContext.Consumer>
        {
          context => <h1>context</h1>
        }
      </TheContext.Consumer>
    </div>
  );
}

export default FinalChild;
