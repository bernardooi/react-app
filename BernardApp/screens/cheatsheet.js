import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  contain: {
    flex: 1,
    marginHorizontal: 16,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HUB = ({navigation}) => {
  return (
    <View style={styles.contain}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('HTML')}>
          <View style={styles.box}>
            <Text>HTML</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('CSS')}>
          <View style={styles.box}>
            <Text>CSS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('JS')}>
          <View style={styles.box}>
            <Text>JS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('React')}>
          <View style={styles.box}>
            <Text>React</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HUB;
