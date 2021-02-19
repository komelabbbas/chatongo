import { StyleSheet } from 'react-native';
import { colors, SCREEN_WIDTH } from '../../constants';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15
    },
    body: {
        marginTop: 70,
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row'
    },
    symbol: {
        fontSize: 22,
        color: colors.white,
        paddingRight: 2
    },
    amountTitle: {
        flex: 1,
        color: colors.white,
        fontWeight: '200',
        fontSize: 16
    },
    amountValue: {
        flex: 1,
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 3
    },
    textCenter: {},
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 7
    },
    categoryText: {
        fontSize: 10,
        color: colors.primary,
        fontWeight: '700',
        letterSpacing: 1
    },
    amountLabels: {
        marginTop: 10
    },
    absoluteContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: SCREEN_WIDTH / 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: colors.white,
        marginHorizontal: 12,
        borderRadius: 7,
        paddingHorizontal: 7,
        paddingVertical: 7,
        flex: 1,
        flexDirection: 'row'
    },
    heading: {
        flex: 3
    },
    likeContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    likeImage: {
        width: 19,
        height: 19,
        marginRight: 6
    },
    circleContainer: {
        marginRight: 15
    },
    circle: {
        backgroundColor: colors.primaryDark,
        width: 70,
        height: 70,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleText: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    description: {
        marginBottom: 12
    }
});

export default styles;
