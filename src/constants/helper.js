import { Platform, Dimensions } from 'react-native';

export const isIosPlatform = () => Platform.OS === 'ios';

export const isAndroidPlatform = () => Platform.OS === 'android';

export const definePlatformParam = (ios, android) =>
    isIosPlatform() ? ios : android;

export const isMajorScreenHeight = Dimensions.get('window').height >= 800;

export const defineSize = (normal, large) =>
    !isMajorScreenHeight ? normal : large;

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const indianRupees = (amount) => `₹ ${amount}`;
