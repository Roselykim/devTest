import React, { useContext,useState } from 'react';
import { View, Text, StyleSheet, Image,Button,TextInput } from 'react-native';
import { UserContext } from './UserContext';

const DEFAULT_PROFILE_PHOTO = '../assets/icon.png'; 


const Dashboard = () => {
  const { user, updateUser } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user }); // Copy user for editing

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      // Update user state with edited values on save
      updateUser(editedUser);
    }
  };

  const handleChange = (field, newValue) => {
    setEditedUser({ ...editedUser, [field]: newValue });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile-user.png')} style={styles.userIcon} />
      {isEditing ? (
        <>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            value={editedUser.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            value={editedUser.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            value={editedUser.phoneNumber}
            onChangeText={(text) => handleChange('phoneNumber', text)}
          />
        </>
      ) : (
        <>
          <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.userPhone}>{user.phoneNumber}</Text>
        </>
      )}
      <Button style={styles.edit} title={isEditing ? 'Save' : 'Edit'} onPress={handleEdit} color="#FF3B30" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  userIcon: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    textAlign: 'center',
  },
  userPhone: {
    fontSize: 22,
    color: '#555',
    textAlign: 'center', 
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 18,
    color: 'red',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default Dashboard;
