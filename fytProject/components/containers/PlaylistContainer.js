import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { H1, Text } from "native-base";
import { connect } from "react-redux";
import { Pagination } from "react-native-snap-carousel";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Icon,
  Title,
  Content
} from "native-base";
import Controls from "../Playlist/Controls";
import Dashboard from "../Playlist/Dashboard";

const styles = StyleSheet.create({
  bg_dark: {
    backgroundColor: "#303030"
  },
  header: {
    backgroundColor: "#B71C1C"
  },
  playlist: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  workout: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    padding: 10
  },
  completed: {
    color: "#64dd17"
  }
});

function mapStateToProps(state) {
  return { workout: state.workout };
}

class Playlist extends Component {
  constructor(props) {
    super(props);
    let queue = [];
    for (let workout in this.props.workout) {
      let workoutObj = { workout: workout };
      let sets = [];
      for (let set in this.props.workout[workout]) {
        let setInfo = this.props.workout[workout][set];
        let setObj = {
          reps: setInfo.reps,
          weight: setInfo.weight,
          completed: setInfo.completed
        };
        sets.push(setObj);
      }
      workoutObj.sets = sets;
      queue.push(workoutObj);
    }
    this.state = {
      queue: queue,
      workoutIdx: 0,
      setIdx: 0
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.updateSetIndex = this.updateSetIndex.bind(this);
    this.check = this.check.bind(this);
    this.isWorkoutComplete = this.isWorkoutComplete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //TODO: Handle change in redux state?
  }

  prev() {
    let newWorkoutIdx = this.state.workoutIdx - 1;
    if (newWorkoutIdx < 0) {
      //Currently at the beginning of the queue
      return;
    }
    this.refs.dashboard.resetCarousel();
    this.setState({ workoutIdx: newWorkoutIdx });
  }

  next() {
    let newWorkoutIdx = this.state.workoutIdx + 1;
    if (newWorkoutIdx >= this.state.queue.length) {
      //Currently at the end of the queue
      return;
    }
    this.refs.dashboard.resetCarousel();
    this.setState({ workoutIdx: newWorkoutIdx });
  }

  updateSetIndex(newSetIdx) {
    this.setState({ setIdx: newSetIdx });
  }

  check() {
    let newQueue = this.state.queue;
    newQueue[this.state.workoutIdx].sets[this.state.setIdx].completed = true;
    this.setState({ queue: newQueue });
  }

  isWorkoutComplete() {
    let sets = this.state.queue[this.state.workoutIdx].sets;
    for (let i = 0; i < sets.length; ++i) {
      if (sets[i].completed === false) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <Container style={styles.bg_dark}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Fyt</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.playlist}>
          <H1
            style={[
              styles.workout,
              this.isWorkoutComplete() && styles.completed
            ]}
          >
            {this.state.queue[this.state.workoutIdx].workout}
          </H1>
          <Dashboard
            ref="dashboard"
            sets={this.state.queue[this.state.workoutIdx].sets}
            updateSetIndex={this.updateSetIndex}
          />
          <View>
            <Pagination
              dotsLength={this.state.queue[this.state.workoutIdx].sets.length}
              activeDotIndex={this.state.setIdx}
              dotColor={"#fff"}
              inactiveDotColor={"#aaa"}
            />
            <Controls prev={this.prev} next={this.next} check={this.check} />
          </View>
        </View>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Playlist);
