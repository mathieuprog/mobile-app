import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';
import FontAwesome6Icons from '@expo/vector-icons/FontAwesome6';
import { Icon } from './Icon';

interface TextInputWithIconProps extends TextInputProps {
  iconName: keyof typeof FontAwesome6Icons.glyphMap;
  iconColor?: string;
  iconSize?: number;
}

export function TextInputWithIcon({
  iconName,
  iconColor = '#777',
  iconSize = 16,
  style,
  ...textInputProps
}: TextInputWithIconProps) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, style]}
        {...textInputProps}
      />
      <View style={styles.iconContainer}>
        <Icon 
          name={iconName} 
          size={iconSize} 
          color={iconColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    paddingLeft: 40,
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
