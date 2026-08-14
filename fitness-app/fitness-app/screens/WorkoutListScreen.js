import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutCard from '../components/WorkoutCard';
import { workouts } from '../data/workouts';

const categories = ['All', 'Gym', 'Yoga', 'Cardio', 'Core'];

export default function WorkoutListScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? workouts
    : workouts.filter(item => item.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBFBFD" />
      
      <View style={styles.header}>
        <Text style={styles.subTitle}>PUMP HOUSE</Text>
        <Text style={styles.title}>Workout Routines</Text>
      </View>

      <View style={styles.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const active = selectedCategory === item;
            return (
              <TouchableOpacity
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <WorkoutCard
            image={item.image}
            title={item.title}
            duration={item.duration}
            calories={item.calories}
            category={item.category}
            onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFD',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  subTitle: {
    fontSize: 11,
    color: '#FF4D6D',
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A24',
    marginTop: 2,
  },
  categories: {
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#FFF0F3',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: '#FF4D6D',
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF4D6D',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
