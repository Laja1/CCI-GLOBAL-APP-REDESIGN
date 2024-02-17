import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
const logo = require("../assets/logo.png");
import tw from "twrnc";
export default function Loading({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Navigation")}>
      <View style={tw`bg-[#0F0F0F] h-full justify-center`}>
        <View style={tw` items-center justify-center`}>
          <View>
            <Image source={logo} />
          </View>
          <Text style={tw`text-white text-[28px] font-bold`}>
            CELEBRATION CHURCH
          </Text>
          <Text style={tw`text-white text-[20px]`}>...endless life</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
