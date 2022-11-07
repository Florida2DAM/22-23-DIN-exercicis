/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {TextInput, Button, Switch, Surface, Chip} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const App = () => {
  const [necessiteDescans, setNecessiteDescans] = useState(false);
  const [isWifi, setIsWifi] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="TextInput (email)">
            <TextInput label="Email" placeholder="Escriu el teu email" />
          </Section>
          <Section title="Button(amb text i icona) ">
            <Button icon="alien" mode="contained" uppercase={false}>
              Alien
            </Button>
            <Button icon="alien" mode="contained" dark={false}>
              Alien
            </Button>
            <Button icon="alien" mode="outlined">
              Alien
            </Button>
            <Button icon="alien" mode="text">
              Alien
            </Button>
          </Section>
          <Section title="Switch Necessites un descans?">
            <Switch
              value={necessiteDescans}
              color="red"
              onValueChange={() => setNecessiteDescans(!necessiteDescans)}
            />
          </Section>
          <Section title="Botó dins un d'component Surface?">
            <Surface style={styles.surface}>
              <Button icon="alien" mode="text">
                Alien
              </Button>
            </Surface>
          </Section>
          <Section title="Provant Chips">
            <View style={{flexDirection: 'row'}}>
              <Chip icon="web" mode="flat">Internet</Chip>
              <Chip icon="wifi" mode="outlined" selected={isWifi} selectedColor={isWifi?'red':'black'} onPress={()=>setIsWifi(!isWifi)}>Wifi</Chip>
            </View>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  surface: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default App;
