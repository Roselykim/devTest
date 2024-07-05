import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Map from './Map'; 

const Police = () => {
  const [reports, setReports] = useState([]); // Array to store received report notifications
  const [expandedReportId, setExpandedReportId] = useState(null); // Track expanded report id

  // Function to simulate receiving reports (replace with actual notification logic)
  const receiveReport = (reportData) => {
    setReports((prevReports) => [...prevReports, reportData]); // Add new report to state
  };

  // Simulate receiving reports initially (replace with actual implementation)
  useEffect(() => {
    const simulatedReports = [
      { id: 1, location: { latitude: 37.7749, longitude: -122.4194 }, message: 'Accident on Main St.' },
      { id: 2, location: { latitude: 37.7849, longitude: -122.4294 }, message: 'Fire at Park Avenue' },
      // ... other simulated reports
    ];
    simulatedReports.forEach((report) => receiveReport(report));
  }, []);

  const handleReadReport = (reportId) => {
    // Mark report as read (toggle expanded state)
    setExpandedReportId(reportId === expandedReportId ? null : reportId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.notificationArea}>
        <Text style={styles.title}>Reported Incidents</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {reports.length === 0 ? (
            <Text>No new reports.</Text>
          ) : (
            reports.map((report) => (
              <View key={report.id} style={styles.reportItem}>
                <Text>Location: {report.location.latitude}, {report.location.longitude}</Text>
                {expandedReportId === report.id ? (
                  <Text style={styles.message}>{report.message}</Text>
                ) : null}
                <TouchableOpacity onPress={() => handleReadReport(report.id)} style={styles.readButtonContainer}>
                  <Text style={styles.readButtonText}>{expandedReportId === report.id ? 'Mark as Unread' : 'Read'}</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
  },
  notificationArea: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    paddingVertical: 10,
  },
  reportItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  message: {
    marginVertical: 10,
  },
  readButtonContainer: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  readButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Police;
