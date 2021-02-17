import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingBottom: 15,
    },
    body: {
        marginTop: 50,
        paddingHorizontal: 20
    },
    row: {
        flexDirection: "row"
    },
    amountTitle: {
        flex: 1, color: colors.white, fontWeight: "200",
        fontSize: 16
    },
    amountValue: {
        flex: 1, color: colors.white, fontWeight: "bold",
        fontSize: 18
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    category: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7
    },
    categoryText: {
        fontSize: 10,
        color: colors.primary,
        fontWeight: "700"
    },
    amountLabels: {
        marginTop: 10,
    }
});

export default styles