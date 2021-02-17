import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        paddingBottom: 15,
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    heading: {
        fontSize: 22,
        fontWeight: "600",
        color: colors.white
    }
});

export default styles