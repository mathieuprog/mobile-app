import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { COLORS } from '../constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'medium' | 'large';
}

export function Button({ 
  title, 
  variant = 'primary', 
  size = 'medium',
  style,
  ...props 
}: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, styles[variant], styles[size], style]} 
      {...props}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  text: {
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
    fontSize: 16,
  },
  secondaryText: {
    color: 'white',
    fontSize: 16,
  },
  outlineText: {
    color: COLORS.primary,
    fontSize: 16,
  },
});
