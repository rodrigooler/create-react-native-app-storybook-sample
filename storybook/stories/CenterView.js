/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React, { PropTypes } from 'react';
import { View } from 'react-native';

const style = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
};

export default function CenterView(props) {
  return (
    <View style={style.main}>
      {props.children}
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
