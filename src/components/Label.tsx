import { StyleSheet, Text } from 'react-native';

export function Label({ children }: { children: React.ReactNode }) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
});
