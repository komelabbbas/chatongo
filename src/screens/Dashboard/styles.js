import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.primary,
        marginTop: -25
    },
    container: {
        backgroundColor: colors.black,
        paddingBottom: 15,
        paddingVertical: 40,
        paddingHorizontal: 10
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.white
    },
    cards: {
        marginBottom: 160
    }
});

export default styles;
