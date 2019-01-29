import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetail extends React.Component {
  static navigetionOptions = {
    header: null
  };
   
render() {
  let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO')
  let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;

  return(
    <WebView 
      style={{matginTop: 20}}
      javaScriptEnabled={true}
      source={{uri: tubeUrl }}
    />
  );
}


}