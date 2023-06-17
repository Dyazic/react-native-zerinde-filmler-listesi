import React, { useState } from 'react';
import { FlatList, Image, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

function App(): JSX.Element {
  const jsonData = [
    {
      id: 1,
      filmName: "Balina",
      filmType:"Dram/Kurgusal",
      filmImage: "https://img01.imgsinemalar.com/images/afis_buyuk/b/the-whale-1677241472.jpg"
    },
    {
      id:2,
      filmName:"Galaksinin Koruyucuları 2",
      filmType:"Bilim Kurgu/Aksiyon",
      filmImage:"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ1sKfgy3_W-FBw0EYcAmVOmulphbhAfrHWn5qgJttMh5v9MRMy0IVFAEE2Wf9iqGdC"
    },
    {
      id:3,
      filmName:"Star Wars Jedi'ın Dönüşü",
      filmType:"Bilim Kurgu/Aksiyon",
      filmImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtSV_NrbJALIN2MQu6SkgXV-EobUabYr1j9JrszQK&usqp=CAE&s",
    },
    {
      id:4,
      filmName:"Star Wars İmparatorluk Saldırıyor",
      filmType:"Bilim Kurgu/Aksiyon",
      filmImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1NNEMT5FE1YgU3x5qtVqPBzqT0Lt_uGNRhKgR8BO&usqp=CAE&s",
    },
    {
      id:5,
      filmName:"Uncharted",
      filmType:"Macera/Aksiyon",
      filmImage:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS148VQcCwjB4BgkrjdLPF7ln5At6Z6xvLMdS8YSUXoksYExx4R",
    },
    {
      id:6,
      filmName:"Kayıp Şehir Z",
      filmType:"Macera/Dram",
      filmImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBS8--SjTg2MKpzvwJTxHfmo19qXbBTrIlGSnY1VRu&usqp=CAE&s",
    },
    {
      id:7,
      filmName:"Gulliver'in Gezileri",
      filmType:"Macera/Çocuk",
      filmImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCz71vmNtFVxM9ciLgdNiSEeOM_4lejuNg50JP4cAI&usqp=CAE&s",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
        <FlatList
          data={jsonData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.id} - {item.filmName}</Text>
              <Text style={styles.itemText}>{item.filmType}</Text>
              <Image source={{ uri: item.filmImage }} style={styles.itemImage} />
            </View>
          )}
        />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  itemText: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemImage: {
    width: 150,
    height: 250,
    resizeMode: 'cover',
  },
});

export default App;
