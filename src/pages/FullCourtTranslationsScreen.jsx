import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FullCourtHeader from '../components/FullCourtHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FullCourtHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Formula 1', '05.06 14:00', 'British Grand Prix \n' + 'Race Day')}
        {renderBroadcast('IndyCar', '07.06 16:30', 'Indianapolis 500 \n' + 'Final Laps')}
        {renderBroadcast('NASCAR Cup Series', '09.06 18:45', 'Daytona 500 \n' + 'Final Stage')}
        {renderBroadcast('WEC', '11.06 20:00', 'Le Mans 24 Hours \n' + 'Midnight Shift')}
        {renderBroadcast('Formula E', '13.06 17:15', 'Monaco E-Prix \n' + 'Final Laps')}
        {renderBroadcast('DTM', '15.06 14:45', 'Nürburgring GP \n' + 'Main Race')}
        {renderBroadcast('MotoGP', '17.06 16:00', 'Mugello Grand Prix \n' + 'Final Sprint')}
        {renderBroadcast('Rally WRC', '19.06 15:30', 'Rally Finland \n' + 'Power Stage')}
        {renderBroadcast('Extreme E', '21.06 19:00', 'Desert X-Prix \n' + 'Final')}
        {renderBroadcast('Super GT', '23.06 18:15', 'Suzuka 1000km \n' + 'Last Hour')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
});
