import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './ActivityScreenStyles';

const ActivityScreen = ({ message }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>{message}</Text>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default ActivityScreen;
