import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`

const whatGlobo = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`

export class About extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      <Text style={styles.aboutTitle}>Who we are</Text>
      <Text style={styles.aboutText}>{aboutGlobo}</Text>

        <Text style={styles.aboutTitle}>What We Do</Text>
        <Text style={styles.aboutText}>{whatGlobo}</Text>
        <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff'
  },
  pics: {
    height: 300
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center'
  },
  aboutText: {
    paddingBottom: 20,
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }
});