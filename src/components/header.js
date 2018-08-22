import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Tha Album</Text>
    </View>
  );
};

const styles = {
viewStyle: {
backgroundColor: 'goldenrod',
justifyContent: 'center',
alignItems: 'center',
height: 60,
paddingTop: 15,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
elevation: 2,
position: 'relative' 
},
  textStyle: {
    fontSize: 20
  }
};
export default Header;
