import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  newsImages: {
    width: '75%',
    height: 100,
  },
});

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNewsAPI = () => {
      return fetch(
        'https://newsapi.org/v2/top-headlines?country=se&apiKey=5f52a63364d34aac926ec1b61d9c92ad',
      )
        .then(response => response.json())
        .then(response => {
          return response.articles; // Return the articles directly
        });
    };

    getNewsAPI().then(articles => {
      setNews(articles); // Update the state with the articles
    });
  }, []);

  return (
    <ScrollView>
      {news.map((item, index) => {
        return (
          <TouchableOpacity
            index={index}
            onPress={() => Linking.openURL(item.url)}>
            <View
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: 80,
                flex: 1,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: `${item.urlToImage}`}}
                style={styles.newsImages}></Image>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>Author: {item.author}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default News;
