/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TextInput, View, Button} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [key, setKey] = React.useState<string>('');
  const [value, setValue] = React.useState<string>('');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TextInput
        placeholder="Key"
        value={key}
        onChangeText={setKey}
        style={{
          borderWidth: 1,
          borderBottomColor: '#aaa',
          margin: 10,
          paddingVertical: 10,
        }}
      />
      <TextInput
        placeholder="Value"
        value={value}
        onChangeText={setValue}
        style={{
          borderWidth: 1,
          borderBottomColor: '#aaa',
          margin: 10,
          paddingVertical: 10,
        }}
      />
      <Button
        title="Save"
        onPress={() => {
          AsyncStorage.setItem(key, value);
        }}
      />
      <Button
        title="Load"
        onPress={() => {
          AsyncStorage.getItem(key, (err, result) => {
            if (result) {
              setValue(result);
            }
          });
        }}
      />
    </View>
  );
}

export default App;
