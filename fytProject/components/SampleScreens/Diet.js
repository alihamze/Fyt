import React from "react";
import { Container, Text, View } from "native-base";
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView
} from "react-native";
import { Constants } from "expo";
import Head from "../Navigation/Head";

const styles = StyleSheet.create({
  bigWhite: {
    color: "#FFFFFF",
    fontSize: 25,
    fontStyle: "italic"
  },
  smallWhite: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 15
  },
  smallWhiteRightAlign: {
    padding: 10,
    paddingTop: -20,
    flex: 1,
    flexWrap: "wrap",
    width: Dimensions.get("window").width,
    color: "#FFFFFF",
    fontSize: 15,
    justifyContent: "flex-end"
  }
});

export default class Diet extends React.Component {
  render() {
    let pic = {
      uri:
        "https://ultimateperformance.com/media/Charles-12-week-transformation-results-front.jpg"
    };
    let pic2 = {
      uri:
        "https://upfitness.co.uk/media/Kelly-18-week-front-body-transformation-results.jpg"
    };
    let pic3 = {
      uri:
        "https://www.veggieinspired.com/wp-content/uploads/2015/05/Customizable-Sweet-Creamy-Oatmeal-2.1-814x1024.jpg"
    };
    let pic4 = {
      uri:
        "https://i0.wp.com/notyournormalhealthblog.com/wp-content/uploads/2012/09/p8280370-1.jpg?fit=1170%2C878&ssl=1"
    };
    let pic5 = {
      uri: "http://images.media-allrecipes.com/images/65782.jpg"
    };
    const navigate = this.props.navigation;
    return (
      <Container
        style={{ top: Constants.statusBarHeight, backgroundColor: "#303030" }}
      >
        <Head title="Diet" navigation={navigate} />
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.bigWhite}> Transformations </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image source={pic} style={{ width: 193, height: 110 }} />
            <Image source={pic2} style={{ width: 193, height: 110 }} />
          </View>

          <View>
            <Text style={styles.smallWhite}>
              Here is a diet plan to transform your body to look like the ones
              above.
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <Image
              source={pic3}
              style={{
                justifyContent: "flex-start",
                width: 170,
                height: 180
              }}
            />
            <Text style={styles.smallWhiteRightAlign}>
              Breakfast: Oatmeal with berries and peanut butter, Protein Powder
              Ingredients: 8 oz dried oats, 4 oz Berries, 1 teaspoon of Peanut
              Butter, 1 scoop of Protein Powder Macros: 40g of Carbs, 3g of
              Fats, 21g of Protein, Total Calories: 271
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Image source={pic4} style={{ width: 170, height: 180 }} />
            <Text style={styles.smallWhiteRightAlign}>
              Lunch: Chicken Breast with sweet potato and vegetables
              Ingredients: 16 oz Chicken Breast, 1 sweet potato, 1 cup of mixed
              vegetables Macros: 70g of Carbs, 5g of Fats, 90g of Protein, Total
              Calories: 685
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Image source={pic5} style={{ width: 170, height: 180 }} />
            <Text style={styles.smallWhiteRightAlign}>
              Dinner: Salmon with rice and vegetables Ingredients: 10 oz salmon,
              250g of cooked rice, 1 cup of mixed vegetables Macros: 40g of
              Carbs, 20g of Fats, 40g of Protein. Total Calories: 500
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
