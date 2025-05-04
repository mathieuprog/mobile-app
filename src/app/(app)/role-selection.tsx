import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useSession } from '../../context';

export default function RoleSelection() {
  const router = useRouter();
  const { session } = useSession();
  const [selectedRole, setSelectedRole] = useState<'technician' | 'salesperson' | null>(null);

  // Redirect to sign-in if not authenticated
  if (!session) {
    router.replace('/sign-in');
    return null;
  }

  const handleContinue = () => {
    if (selectedRole) {
      // Here you would typically store the selected role in your app state/context
      // For now, just navigate to the main screen
      router.replace('/');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Text style={styles.subtitle}>Choose the role that best describes you</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={[
            styles.roleOption,
            selectedRole === 'technician' && styles.selectedOption
          ]}
          onPress={() => setSelectedRole('technician')}
        >
          <Text style={[
            styles.roleText,
            selectedRole === 'technician' && styles.selectedText
          ]}>Technician</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.roleOption,
            selectedRole === 'salesperson' && styles.selectedOption
          ]}
          onPress={() => setSelectedRole('salesperson')}
        >
          <Text style={[
            styles.roleText,
            selectedRole === 'salesperson' && styles.selectedText
          ]}>Salesperson</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={[styles.continueButton, !selectedRole && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!selectedRole}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  roleOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: '#007AFF',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  roleText: {
    fontSize: 18,
  },
  selectedText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 