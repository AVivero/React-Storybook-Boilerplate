import React, {Component} from 'react';
// import container.scss, file where are located all the scss of the project
import './_container.scss';

// this element will be used as decorator wrapping all the components to render
export default class Container extends Component {
  render (){
    const { story } = this.props;

  return (
      <div
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        {story()}
      </div>
  )}
}
