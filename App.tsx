import React from 'react';

import {ThemeProvider} from './src/context/ThemeContext';
import RootNavigator from './src/components/navigation/RootNavigator';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;
