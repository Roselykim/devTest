import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ReportedMessages = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{item.message}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
  },
  messageText: {
    fontSize: 24,
  },
});

export default ReportedMessages;
