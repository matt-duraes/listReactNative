import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding:24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },

    input: {
        backgroundColor: '#1E1B26',
        height: 56,
        flex: 1,
        borderRadius: 5,
        fontSize: 16,
        color: '#fCFCFC',
        paddingLeft: 16,
        marginRight: 12
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },

    buttonAdd: {
        height: 55,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems : 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fCFCFC',
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    }
});