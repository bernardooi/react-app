import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
const styles = StyleSheet.create({
  currencyBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  currencyInput: {
    width: 200,
    height: 50,
    borderWidth: 2,
    fontSize: 20,
    marginBottom: 10,
  },
  convertBtn: {
    width: 125,
    height: 50,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

const Currency = () => {
  const [amount, setAmount] = useState('0');
  const [dataResult, setDataResult] = useState(0);
  const [currency, setCurrency] = useState([]);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      const response = await fetch(`https://api.exchangerate.host/latest`);
      const data = await response.json();
      setCurrency(Object.keys(data.rates));
    };

    const convert = async () => {
      const response = await fetch(
        `https://api.exchangerate.host/convert?from=${from}&to=${to}`,
      );
      const data = await response.json();
      setDataResult(data.result);
    };
    getCurrencies();
    convert();
  }, [from, to]);

  return (
    <View style={styles.currencyBox}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput
          onChangeText={value => setAmount(value)}
          value={amount.toString()}
          style={styles.currencyInput}
          placeholder="amount"></TextInput>
        <SelectList
          dropdownStyles={{width: 120, height: 120}}
          inputStyles={{width: 58, height: 20}}
          style={{width: 100, height: 100}}
          data={currency}
          setSelected={setFrom}
        />
      </View>
      <View style={{flex: 2.5, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.currencyInput}>To: {dataResult * amount}</Text>
        <SelectList
          dropdownStyles={{width: 120, height: 120}}
          inputStyles={{width: 58, height: 20}}
          style={{width: 100, height: 100}}
          data={currency}
          setSelected={setTo}
        />
      </View>
      <Text>{dataResult}</Text>
    </View>
  );
};

export default Currency;
