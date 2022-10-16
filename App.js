/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Lottie from 'lottie-react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const animationRef = useRef<Lottie>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={(backgroundStyle, {height: '100%'})}>
      <View style={styles.card}>
        <View>
          <Image source={require('./pic.jpeg')} style={styles.cardImage} />
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity
            onPress={() => {
              animationRef.current.play();
            }}>
            <View
              style={{display: 'flex', flexDirection: 'column', height: 50}}>
              <Lottie
                ref={animationRef}
                loop={false}
                source={require('./animation.json')}
              />
              <Text>Click To Like</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text>This is a nice duck, why don't you like it</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    flexDirection: 'column',
  },
  cardImage: {
    width: '100%',
    height: 400,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    maxHeight: 50,
  },
});

export default App;
