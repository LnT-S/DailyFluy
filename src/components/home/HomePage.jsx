import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import EditableCard from '../../addOns/atoms/Cards/editableCard';

const HomePage = () => {
    return (
        <AuthenticatedLayout
            title={'Home page'}
            showFooter={false}
        >
            <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="true"
            >
            {/** Category Component*/}
                <View>
                </View>
                {/**Card Component */}
                <View style={styles.cardcontainer}>
                <EditableCard/>
                </View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    cardcontainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomePage;
