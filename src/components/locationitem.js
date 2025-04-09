import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../theme';

const LocationItem = ({ location, onPress, onActionPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.description}>{location.description}</Text>
        <Text style={styles.distance}>{location.distance} miles away</Text>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onActionPress && onActionPress(location)}
        >
          <Text style={styles.actionText}>{location.actionText || "View Details"}</Text>
        </TouchableOpacity>
      </View>
      {location.image && (
        <Image source={{ uri: location.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    padding: SIZES.medium,
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
  description: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginBottom: 4,
  },
  distance: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginBottom: SIZES.medium,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.medium,
    alignSelf: 'flex-start',
  },
  actionText: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.medium,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default LocationItem;
