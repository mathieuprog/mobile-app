import { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { TextInputWithIcon } from '../components/TextInputWithIcon';
import { Button } from '../components/Button';
import { useSession } from '../context';
import { useStorageState } from '../useStorageState';

export default function SignIn() {
  const { signIn } = useSession();
  const [[usernameLoading, storedUsername], setStoredUsername] = useStorageState('username');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!usernameLoading && storedUsername && !username) {
      setUsername(storedUsername);
    }
  }, [usernameLoading, storedUsername, username]);

  const handleSignIn = async () => {
    signIn();
    console.log('Sign in pressed with:', username, password);
    setStoredUsername(username);
    router.replace("/");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.heroContainer}>
          <Image
            source={require("../../assets/images/hero-technician.png")}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.signInText}>
            {username 
              ? `Welcome back, ${username}!`
              : "Welcome! Log in to Acme."}
          </Text>

          <View style={styles.inputContainer}>
            <TextInputWithIcon
              iconName="user"
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInputWithIcon
              iconName="key"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button
            title="Sign in" 
            onPress={handleSignIn}
            size="large"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  heroContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  heroImage: {
    width: "100%",
    height: 200,
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  signInText: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 16,
  }
});
