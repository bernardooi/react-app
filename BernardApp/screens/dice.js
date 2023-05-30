import React, {useState} from 'react';

import {View, TouchableOpacity, Image} from 'react-native';

const Dice = () => {
  const [img, setImg] = useState(require('../images/dice-six-faces-one.png'));

  const getRandomInt = () => {
    const rndNumber = Math.floor(Math.random() * 6) + 1;
    console.log(rndNumber);

    if (rndNumber == 1) {
      setImg(require('../images/dice-six-faces-one.png'));
      return img;
    }
    if (rndNumber == 2) {
      setImg(require('../images/dice-six-faces-two.png'));
      return img;
    }
    if (rndNumber == 3) {
      setImg(require('../images/dice-six-faces-three.png'));
      return img;
    }
    if (rndNumber == 4) {
      setImg(require('../images/dice-six-faces-four.png'));
      return img;
    }
    if (rndNumber == 5) {
      setImg(require('../images/dice-six-faces-five.png'));
      return img;
    }
    if (rndNumber == 6) {
      setImg(require('../images/dice-six-faces-six.png'));
      return img;
    } else {
      return img;
    }
  };
  return (
    <TouchableOpacity onPress={getRandomInt}>
      <View
        style={{
          display: 'flex',
          height: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Image source={img} style={{width: 150, height: 150}} />
      </View>
    </TouchableOpacity>
  );
};

export default Dice;
