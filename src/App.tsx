import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import TopContainer from './components/TopContainer';
import MidContainer from './components/MidContainer';
import BotContainer from './components/BotContainer';
import './style.css';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <div className="app">
          <TopContainer />
          <MidContainer />
          <BotContainer />
        </div>
      </MantineProvider>
    </ColorSchemeProvider >
  );
}

export default App;
