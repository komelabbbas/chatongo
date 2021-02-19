import { StyleSheet } from 'react-native';
import {
    colors,
    isAndroidPlatform,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
} from '../../constants';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.primary,
        marginTop: -25
    },
    container: {
        backgroundColor: colors.black,
        paddingBottom: 15,
        paddingVertical: 50,
        paddingHorizontal: 15
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.white
    },
    cards: {
        marginBottom: isAndroidPlatform() ? 200 : 170
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        marginTop: -50
    }
});

export default styles;
