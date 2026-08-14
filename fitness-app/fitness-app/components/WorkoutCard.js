import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WorkoutCard({ image, title, duration, calories, category, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        
        <TouchableOpacity 
          style={styles.favoriteBtn} 
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={18} 
            color={isFavorite ? "#FF4D6D" : "#8A8A9E"} 
          />
        </TouchableOpacity>

        {category && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.meta}>
          <View style={styles.badge}>
            <Ionicons name="time-outline" size={12} color="#FF4D6D" />
            <Text style={styles.badgeText}>{duration}</Text>
          </View>

          <View style={styles.badge}>
            <Ionicons name="flame-outline" size={12} color="#FF4D6D" />
            <Text style={styles.badgeText}>{calories}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFEBF0',
  },
  imageContainer: {
    position: 'relative',
    height: 150,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 6,
  },
  categoryBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#FF4D6D',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  info: {
    padding: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A24',
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FF4D6D',
  },
});
