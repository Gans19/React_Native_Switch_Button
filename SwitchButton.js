import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SwitchButton = ({ userData }) => {
  // select the first tab
  const [selectedTab, setSelectedTab] = useState(0);
  // pass the selected user data is userdata object is send from the App.js
  const selectedUser = userData[selectedTab];

  return (
    //This is the SwitchButton View that will be shown that the user has selected
    <View style={{ flex: 1, backgroundColor: "#F4F9F9" }}>
      <View
        style={{
          width: "90%",
          height: 60,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 15,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{
            width: "49.75%",
            height: 55,
            backgroundColor: selectedTab === 0 ? "#687EFF" : "#F4F9F9",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: selectedTab === 0 ? "#F5F7F8" : "black",
            }}
          >
            User 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "49.75%",
            height: 55,
            backgroundColor: selectedTab === 1 ? "#687EFF" : "#F4F9F9",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: selectedTab === 1 ? "white" : "black",
            }}
          >
            User 2
          </Text>
        </TouchableOpacity>
      </View>

      {/* This is the  Rendered Text */}

      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 50,
          //   justifyContent: "center",
          //   backgroundColor: selectedTab === 0 ? "#FFF6F6" : "#FFDFDF",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "90%",
          }}
        >
          <View
            style={{
              height: 100,
              borderRadius: 15,
              backgroundColor: "white",
              width: "48.75%",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   flexDirection: "row",
              //   marginRight: 10,
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                fontSize: 18,
                fontWeight: "700",
                color: "#687EFF",
              }}
            >
              Name{" "}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 7,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {" "}
              {selectedUser.name}
            </Text>
          </View>
          <View
            style={{
              height: 100,
              borderRadius: 15,
              backgroundColor: "white",
              width: "48.75%",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   flexDirection: "row",
              //   marginRight: 10,
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                fontSize: 18,
                fontWeight: "700",
                color: "#687EFF",
              }}
            >
              Age{" "}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 7,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {" "}
              {selectedUser.age}
            </Text>
          </View>
        </View>

        {/* Adress Section */}
        <View
          style={{
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              height: 100,
              borderRadius: 15,
              backgroundColor: "white",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                fontSize: 18,
                fontWeight: "700",
                color: "#687EFF",
              }}
            >
              Address{" "}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 7,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {selectedUser.address}
            </Text>
          </View>
        </View>

        {/* pincode Section   */}
        <View
          style={{
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              height: 100,
              borderRadius: 15,
              backgroundColor: "white",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                fontSize: 18,
                fontWeight: "700",
                color: "#687EFF",
              }}
            >
              Pincode{" "}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 7,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {selectedUser.pincode}
            </Text>
          </View>
        </View>

        {/* Number Section */}

        <View
          style={{
            alignItems: "center",
            width: "90%",
          }}
        >
          <View
            style={{
              height: 100,
              borderRadius: 15,
              backgroundColor: "white",
              width: "100%",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                marginTop: 15,
                fontSize: 18,
                fontWeight: "700",
                color: "#687EFF",
              }}
            >
              Number{" "}
            </Text>
            <Text
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 7,
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {selectedUser.number}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SwitchButton;
