import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import DefaultPreference from 'react-native-default-preference';

const MyComponent = () => {
  useEffect(() => {
    // Set a value
    DefaultPreference.set('key', 'exampleValue')
      .then(() => console.log('Value set successfully'))
      .catch((err) => console.error('Error setting value:', err));

    // Get a value
    DefaultPreference.get('key')
      .then((value) => console.log('Retrieved value:', value))
      .catch((err) => console.error('Error getting value:', err));
  }, []);

  return (
    <View>
      <Text>Check the console for logs</Text>
    </View>
  );
};

export default MyComponent;