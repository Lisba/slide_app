import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import type { PrettifyDistributive } from '@types';

const sections = [
  {
    title: 'Section 1',
    data: [
      { id: '1', title: 'Item 1-1' },
      { id: '2', title: 'Item 1-2' },
    ],
  },
  {
    title: 'Section 2',
    data: [
      { id: '1', title: 'Item 2-1' },
      { id: '2', title: 'Item 2-2' },
    ],
  },
  {
    title: 'Section 3',
    data: [
      { id: '1', title: 'Item 3-1' },
      { id: '2', title: 'Item 3-2' },
    ],
  },
];

type sectionT = (typeof sections)[number];

type sectionItemT = PrettifyDistributive<{
  section: sectionT;
}>;

type renderItemT = PrettifyDistributive<{
  item: sectionT['data'][number];
}>;

const renderItem = ({ item }: renderItemT) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }: sectionItemT) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const MultiListScreen = () => {
  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    padding: 8,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 20,
  },
  item: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MultiListScreen;
