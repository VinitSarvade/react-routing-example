import React from 'react';
import FinalChild from './finalchild';
import { TheContext } from './new-page';

const SubChild = props => {
  return (
    <TheContext.Consumer>
      {
        context => context
      }
    </TheContext.Consumer>
  );
}

export default SubChild;
