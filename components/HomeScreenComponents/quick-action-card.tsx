import { LinkProps, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import IconContainer from "../icon-container";

interface QuickActionCardProps {
  icon: string;
  title: string;
  color: string;
  route: LinkProps["href"] | (() => void);
}

export default function QuickActionCard({
  color,
  icon,
  route,
  title,
}: QuickActionCardProps) {
  const router = useRouter();

  //  Function to check weather a route is simple route or a function

  const handlePress = () => {
    if (typeof route === "function") {
      route();
    } else {
      router.push(route);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.actionContainer, { backgroundColor: color }]}
      onPress={handlePress}
    >
      {/* <View style={styles.iconContainer}>
        <Ionicons name={icon as any} color="#ffffff" size={28} />
      </View> */}
      <IconContainer icon={icon } size={28} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    width: 170,
    height: 100,
    borderRadius: 20,
    paddingLeft: 15,
    paddingTop: 10,
    gap: 5,
  },

  // iconContainer: {
  //   backgroundColor: "rgba(255, 255, 255, 0.2)",
  //   width: 40,
  //   height: 40,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 20,
  // },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
});
