import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import tw from "twrnc";
import Ionicons from "react-native-vector-icons/Ionicons";
import user from "../assets/user.png";
function Give() {
  return (
    <View style={tw`bg-[#000000] h-full`}>
      <StatusBar barStyle="light-content" />
      <View style={tw`items-center pt-20`}>
        <Image source={user} />
        <Text style={tw`text-white text-[28px] font-bold`}>John Doe</Text>
        <Text style={tw`text-white text-[20px] `}>Lagos, Nigeria</Text>
        <View style={tw`pt-[10px]`}>
          <View
            style={tw`w-[388px] bg-[#0f0f0f] shadow-2xl rounded-xl h-[48px] px-2 justify-center`}
          >
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-[#ffffff] text-[16px] font-bold`}>
                Update Profile
              </Text>
              <Ionicons name="arrow-down-circle" size={25} color="white" />
            </View>
          </View>
          <View style={tw`pt-5`}>
            <View
              style={tw`w-[388px] bg-[#0f0f0f] shadow-2xl  rounded-xl h-[48px] px-2 justify-center`}
            >
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-[#ffffff] text-[16px] font-bold`}>
                  Change Password
                </Text>
                <Ionicons name="arrow-down-circle" size={25} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`mt-[300px] justify-center items-center`}>
        <TouchableOpacity>
          <View
            style={tw`w-[200px] h-[52px] bg-[#ffffff] rounded-[10px] items-center justify-center`}
          >
            <Text style={tw`text-[16px]`}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Give;
