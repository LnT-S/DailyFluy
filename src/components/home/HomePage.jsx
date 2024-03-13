import React from 'react';
import { View, StyleSheet, Text,ScrollView } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';

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
            <View>
            <Text> Home</Text></View>
            </ScrollView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({})

export default HomePage;
