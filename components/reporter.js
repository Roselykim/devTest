import React, { useState, useRef, useMemo } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Map from './Map';
import BottomSheet from '@gorhom/bottom-sheet';
import { Card, Button as PaperButton } from 'react-native-paper';

const ReporterApp = () => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [reportNumber, setReportNumber] = useState('');
  const [description, setDescription] = useState('');

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const handleReportPress = () => {
    setIsBottomSheetVisible(true);
    bottomSheetRef.current?.expand();
  };

  const bottomSheetContent = (
    <View style={styles.bottomSheetContainer}>
      {/* Your accident report form elements here */}
      <Text style={styles.text}>Accident Report</Text>
      <TextInput
        style={styles.input}
        placeholder="Report Number"
        onChangeText={setReportNumber}
        value={reportNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={setDescription}
        value={description}
        multiline={true} // Allow multiple lines for detailed descriptions
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => {
        console.log('Accident report submitted:', { reportNumber, description });
        setIsBottomSheetVisible(false); // Close bottom sheet after submit
        bottomSheetRef.current?.close();
      }}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Map />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Closed initially
        snapPoints={snapPoints}
        onClose={() => setIsBottomSheetVisible(false)}
      >
        {bottomSheetContent}
      </BottomSheet>
      <Card style={styles.card}>
        <PaperButton mode="contained" onPress={handleReportPress} style={styles.submitreport}>
          Submit Report
        </PaperButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    paddingBottom: 50,
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.2, // Shadow for iOS
    shadowRadius: 2, // Shadow for iOS
  },
  submitreport: {
    backgroundColor: 'red',
  },
  bottomSheetContainer: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: 'red',
    marginStart: 120,
    marginEnd: 120,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    borderRadius: 40,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReporterApp;
