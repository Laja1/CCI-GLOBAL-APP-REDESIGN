import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const profile = require("../assets/profile.png");
const announcements = require("../assets/announcements.png");
const ann = require("../assets/ann.png");
const qr = require("../assets/qr.png");
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import tw from "twrnc";
function HomePage({ navigation }) {
  return (
    <View
      style={tw`bg-[#000000] h-full `}
      forceInset={{ top: "always", bottom: "never" }}
    >
      <ScrollView>
        <View style={tw`flex-row pt-12 pb-5 items-center justify-between px-5`}>
          <Text style={tw`text-white text-[28px] font-bold`}>Good Day!!!</Text>
          <View style={tw`flex-row gap-5  items-center justify-between`}>
            <Fontisto name="bell" color="white" size={25} />
            <Image source={profile} />
          </View>
        </View>
        <View style={tw`items-center `}>
          <View
            style={tw`flex-row bg-[#0f0f0f] shadow-xl rounded-xl px-5 h-[102px] w-[388px] items-center `}
          >
            <Image source={qr} />
            <View style={tw`pl-5`}>
              <Text style={tw`text-white text-[18px]`}>
                Check In To Service
              </Text>
              <Text style={tw`text-white text-[14px]`}>
                we are glad you came
              </Text>
            </View>
          </View>
        </View>
        <Text style={tw`text-white text-[28px] font-bold pl-5 pt-5`}>
          Verse of The Day
        </Text>
        <View style={tw`items-center pt-5`}>
          <View
            style={tw`flex-col bg-[#0f0f0f] shadow-xl rounded-xl px-5 h-[153px] w-[388px] justify-center`}
          >
            <Text style={tw`text-white text-[18px]`}>
              But seek first his kingdom and his righteousness, and all these
              things will be given to you as well.
            </Text>
            <View style={tw`flex-row justify-between pt-5`}>
              <AntDesign name="upload" color="white" size={25} />
              <Text style={tw`text-white text-[18px]`}>Matthew 6:33 NIV</Text>
            </View>
          </View>
        </View>
        <Text style={tw`text-white text-[28px] font-bold pl-5 pt-5`}>
          Announcements
        </Text>
        <View style={tw`items-center pt-2`}>
          <Image source={announcements} />
        </View>
        <Text style={tw`text-white text-[28px] font-bold pl-5 pt-5`}>
          Refresh Your Mind
        </Text>
        <View style={tw`items-center pb-10 pt-2`}>
          <Image source={ann} />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomePage;
