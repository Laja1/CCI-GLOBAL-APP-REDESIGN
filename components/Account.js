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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import user from "../assets/user.png";

// Sample data JSON
const cardData = [
  {
    title: "Offerings/Tithe",
    bank: "GT bank",
    accountName: "CCI ikeja",
    accountNumber: "0463180892",
  },
  {
    title: "Rent",
    bank: "GT bank",
    accountName: "CCI ikeja",
    accountNumber: "0482635296",
  },
  {
    title: "Global Building Project",
    bank: "GT bank",
    accountName: "CCI ikeja",
    accountNumber: "0671926998",
  },
];

function Account() {
  return (
    <SafeAreaView style={tw`bg-[#000000] h-full`}>
      <StatusBar barStyle="light-content" />
      <View style={tw`items-center pt-5`}>
        <Text style={tw`text-white text-[28px] font-bold`}>Give</Text>
        <View
          style={tw`w-[388px] h-[48px] justify-between flex-row border-2 shadow-xl bg-[#1E1E1E] rounded-[20px] items-center px-5`}
        >
          <Text style={tw`text-white text-[22px] font-bold`}>Ikeja</Text>
          <MaterialCommunityIcons name="web" size={30} color="#FFFFFF" />
        </View>
        <View style={tw`pt-[10px]`}>
          {cardData.map((card, index) => (
            <View key={index} style={tw`pt-2`}>
              <View
                style={tw`w-[388px] bg-[#0f0f0f] shadow-2xl  rounded-xl h-[165px] p-5 justify-center`}
              >
                <Text style={tw`text-[#ffffff] text-[28px] font-bold`}>
                  {card.title}
                </Text>
                <Text
                  style={tw`text-[#ffffff] mt-[-25px] text-[28px] font-bold`}
                >
                  ___________________
                </Text>
                <Text style={tw`text-[#ffffff] text-[16px] font-semibold`}>
                  Bank: {card.bank}
                </Text>
                <Text style={tw`text-[#ffffff] text-[16px] font-semibold`}>
                  Account Name: {card.accountName}
                </Text>
                <View style={tw`flex-row `}>
                  <Text style={tw`text-[#ffffff] text-[16px] font-semibold`}>
                    Account Number:
                  </Text>
                  <Text
                    style={tw`text-[#FD0E0E] ml-1 text-[16px] font-semibold`}
                  >
                    {card.accountNumber}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          <View style={tw`justify-center pt-2 items-center`}>
            <TouchableOpacity>
              <View
                style={tw`w-[200px] h-[52px] bg-[#FD0E0E] rounded-[10px] items-center justify-center`}
              >
                <Text style={tw`text-[16px] text-white font-bold`}>
                  GIVE ONLINE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Account;
