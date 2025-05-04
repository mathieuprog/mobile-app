// This file is a fallback for using MaterialIcons on Android and web.

import FontAwesome6Icons from '@expo/vector-icons/FontAwesome6';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

export function Icon({
  name,
  size = 24,
  color,
  style,
}: {
  name: keyof typeof FontAwesome6Icons.glyphMap;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <FontAwesome6Icons color={color} size={size} name={name} style={style} />;
}
