import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../theme';
import Button from './Button';

const GroupCard = ({ group, onPress, onActionPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.nextEvent}>{group.nextEvent}</Text>
        <Button 
          title={group.actionText || "View Details"} 
          variant="outlined" 
          style={styles.button}
          onPress={() => onActionPress && onActionPress(group)}
        />
      </View>
      {group.image && (
        <Image source={{ uri: group.image }} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.medium,
    marginBottom: SIZES.medium,
    ...SHADOWS.medium,
  },
  infoContainer: {
    flex: 1,
    marginRight: SIZES.small,
  },
  name: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: 4,
  },
  nextEvent: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginBottom: SIZES.medium,
  },
  button: {
    alignSelf: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default GroupCard;
