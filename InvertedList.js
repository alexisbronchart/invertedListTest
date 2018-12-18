import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

class InvertedList extends React.Component {
  renderEmptyList = () => {
    const { t } = this.props;
    return (
      <View style={{ alignItems: "center" }}>
        <View style={{ height: 70, width: 70, backgroundColor: "#bbb" }} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginBottom: 4 * 12,
            marginTop: 4 * 6
          }}
        >
          {"Leave your first comment below"}
        </Text>
      </View>
    );
  };

  render() {
    const comments = [];
    return (
      <FlatList
        inverted
        data={comments}
        keyExtractor={({ node }) => {
          return `${node.id}_${this.state.uglyRefreshTrick}`;
        }}
        renderItem={({ item }, index) => {
          return <View style={styles.comment} />;
        }}
        ListEmptyComponent={this.renderEmptyList()}
        keyboardDismissMode={"interactive"}
        contentInset={{ bottom: 200 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    padding: 4
  },
  loadMoreStyle: {
    margin: 12
  },
  lastComment: {
    borderBottomWidth: 0
  }
});

export default InvertedList;
