The issue is resolved by moving the logic that depends on layout measurements to useEffect instead of useLayoutEffect. UseLayoutEffect runs after all DOM mutations. This can cause the blank screen. Using useEffect, the code will be executed after the component is fully mounted. 

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [layoutWidth, setLayoutWidth] = useState(0);

  useEffect(() => {
    const onLayout = (event) => {
      setLayoutWidth(event.nativeEvent.layout.width);
    };
    // Add event listener
    View.addEventListener('layout', onLayout);
    return () => {
      // Remove event listener on unmount
      View.removeEventListener('layout', onLayout);
    };
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>Layout Width: {layoutWidth}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App; 
```