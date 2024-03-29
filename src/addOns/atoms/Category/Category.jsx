import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import CategoryButton from './CategoryButton';

const Category = () => {

    const category = [{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},{id : 0 , name : 'Good Morning'},]

    return (
        <View style={styles.container}>
            <FlatList 
                contentContainerStyle={{display : 'flex' ,justifyContent : 'center', alignItems : 'center'}}
                style={{flex : 1}}
                data={category}
                renderItem={(item , index)=>{
                    return <CategoryButton name={item.name}/>
                }}
                keyExtractor={(item , index)=>index}
                horizontal={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        // backgroundColor : 'green'
    }
})

export default Category;
