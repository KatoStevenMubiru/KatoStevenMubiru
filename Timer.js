import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import {ProgressBar} from 'react-native-paper';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import {Timing} from './Timing';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
   1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
     1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
const[progress, setProgress] = useState(1);
const[minutes, setMinutes] = useState(0.1);

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={ setProgress}
          onEnd={() => {Vibration.vibrate(PATTERN)}}
        />
         <View style={{ paddingTop: spacing.sm }}>
        <Text style={styles.title}> Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
      <ProgressBar 
      progress = {progress}
      color= {colors.lightOrange} 
      style={{height: spacing.sm}}/>
      </View>
     <View style={styles.buttonWrapper}>
      <Timing onChangeTime={setMinutes} style={styles.timingWrapper}/>
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <RoundedButton size={50} title ='-' onPress={() => {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper:{
  flex: 0.1,
 flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
