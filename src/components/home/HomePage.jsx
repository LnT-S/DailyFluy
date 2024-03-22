import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout';
import Card from '../../addOns/atoms/Cards/Card';
import Category from '../../addOns/atoms/Category/Category';


const HomePage = () => {
    return (
        <AuthenticatedLayout
            title={'DAILY FLY'}
            showFooter={false}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{height : '10%'}}>
                    <Category />
                </View>
                <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingVertical: 20 }}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="true"
                >
                    {/** Category Component*/}
                    {/**Card Component */}
                    <View style={styles.cardcontainer}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AuthenticatedLayout>
    );
}

const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: 40
    }
})

export default HomePage;
