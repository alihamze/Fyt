import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View,
  StyleSheet,
  StyleProvider
} from "native-base";
import { Constants } from "expo";
import OnboardHead from "../OnboardHead";
import store from "../../../store";
import { changeHeight } from "../../../actions/ProfileActions";
import platform from "../../../native-base-theme/variables/platform";
import getTheme from "../../../native-base-theme/components";
import { backgroundColor } from "../../../config/styles";

export default class Height extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foot: 0,
      inches: 0
    };
  }

  submitHeight() {
    let height = this.state.foot * 12 + this.state.inches * 1;
    if (typeof height === typeof 1 && height > 0) {
      store.dispatch(changeHeight(height));
      alert("Height Submitted");
    } else {
      alert("Please enter valid values");
    }
  }

  render() {
    const navigate = this.props.navigation;
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container
          style={{
            top: Constants.statusBarHeight,
            backgroundColor: backgroundColor
          }}
        >
          <OnboardHead title="Height" navigation={navigate} />
          <Text
            style={{
              fontSize: 20,
              paddingLeft: "5%",
              paddingTop: "5%",
              color: "white"
            }}
          >
            Please enter your height
          </Text>
          <View>
            <Form style={{ color: "white" }}>
              <Item>
                <Input
                  placeholder="Foot"
                  onChangeText={foot =>
                    this.setState({ foot: foot, inches: this.state.inches })
                  }
                  value={this.state.foot}
                />
              </Item>
              <Item>
                <Input
                  placeholder="Inches"
                  onChangeText={inches =>
                    this.setState({ foot: this.state.foot, inches: inches })
                  }
                  value={this.state.inches}
                />
              </Item>
            </Form>
            <View
              style={{
                padding: "1%",
                top: "10%",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ padding: 10 }} />
              <Button
                rounded
                onPress={() => this.submitHeight()}
                style={{ alignSelf: "center" }}
              >
                <Text>Submit</Text>
              </Button>
              <View style={{ padding: 5 }} />
              <Button
                rounded
                onPress={() => this.props.navigation.navigate("Weight")}
                style={{ alignSelf: "center" }}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </Container>
      </StyleProvider>
    );
  }
}
