import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const sermonsData = [
  {
    id: 1,
    title: "Agalliao",
    image: require("../assets/one.png"),
    description:
      '"Agalliao" is a Greek word found in the New Testament of the Bible. In a church context, it is often used to convey a sense of profound joy, rejoicing, or exultation. It reflects a deep and spiritual happiness that arises from a sense of divine favor or blessings.',
    date: "September 29, 2023",
  },
  {
    id: 2,
    title: "Paper Tiger",
    image: require("../assets/paper.png"),
    description:
      "In a church context, if you were to adapt the phrase, it might be used metaphorically to caution against placing undue fear or importance on things that may seem daunting but are ultimately inconsequential in the context of faith",
    date: "September 29, 2023",
  },
  {
    id: 3,
    title: "Well Spring",
    image: require("../assets/well.png"),
    description:
      "In the context of faith and spirituality, 'Well Spring: Looking unto Jesus' embodies the idea of finding spiritual nourishment, inspiration, and strength by keeping one's gaze fixed upon Jesus Christ",
    date: "September 29, 2023",
  },
  {
    id: 4,
    title: "Glass Jaw",
    image: require("../assets/glass.png"),
    description:
      "Just as a glass jaw is fragile and easily broken, so too can our faith be shaken by life's challenges. Therefore, it is essential to strengthen our faith through prayer, scripture, and community, ensuring that our spiritual 'jaw' becomes resilient, able to withstand the trials of life.",
    date: "September 29, 2023",
  },
  {
    id: 5,
    title: "Dragnet II",
    image: require("../assets/drag.png"),
    description:
      "Dragnet in a church context can be described as a metaphorical term used to refer to a process or system of gathering or collecting individuals or resources with a sense of purpose and order.",
    date: "September 29, 2023",
  },
];

function Media() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality
  };

  return (
    <View style={tw`bg-[#000000] h-full`}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text style={tw`text-white text-[28px] font-bold pl-5 pt-10`}>
          Sermons
        </Text>
        <View style={tw`items-center`}>
          <View style={tw`pt-5 pb-5 justify-center`}>
            <View
              style={tw`w-[388px] h-[48px] flex-row border-2  bg-[#1E1E1E] rounded-[20px] items-center pl-5`}
            >
              <Icon name="magnify" size={30} color="#FFFFFF40" />
              <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor="#FFFFFF40"
                style={tw`pl-5 text-[14px] `}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
              />
            </View>
          </View>
        </View>
        <ScrollView>
          {sermonsData.map((sermon) => (
            <TouchableOpacity key={sermon.id}>
              <View style={tw`items-center pt-3`}>
                <View
                  style={tw`flex-row bg-[#0f0f0f] shadow-xl items-center rounded-xl px-5 h-[96px] w-[388px] justify-center`}
                >
                  <View>
                    <Image source={sermon.image} />
                  </View>
                  <View style={tw`flex-col justify-center p-2`}>
                    <View style={tw`flex-row justify-between gap-20`}>
                      <Text style={tw`text-white text-[18px]`}>
                        {sermon.title}
                      </Text>
                      <View style={tw`flex-row justify-between gap-3`}>
                        <AntDesign name="upload" color="white" size={20} />
                        <AntDesign name="download" color="white" size={20} />
                      </View>
                    </View>
                    <View style={tw`w-[280px]`}>
                      <Text style={tw`text-white text-[8px] `}>
                        {sermon.description}
                      </Text>
                      <View style={tw`flex-row justify-between`}>
                        <Text style={tw`text-white text-[8px] `}>
                          {sermon.date}
                        </Text>
                        <AntDesign name="playcircleo" color="white" size={25} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default Media;
