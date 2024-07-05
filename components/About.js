import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About CARS</Text>
            <Text style={styles.about}>
                Welcome to CARS, your reliable car accident reporting system designed to streamline accident reporting and ensure your safety.
            </Text>
            <Text style={styles.heading}>Our Mission</Text>
            <Text style={styles.mission}>
                We aim to simplify the process of reporting car accidents, helping you get the support you need quickly and efficiently.
            </Text>
            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.contact}>
                For questions or support, contact us at:
                {'\n'}Email: support@cars.com
                {'\n'}Phone: 25581234567
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    about: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    mission: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    contact: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default About;
