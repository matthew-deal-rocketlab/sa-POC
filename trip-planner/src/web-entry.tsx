import { AppRegistry } from "react-native";
import { TripPlanner } from "./components/trip-panner";

// Register the component
AppRegistry.registerComponent("TripPlanner", () => TripPlanner);

// Web-specific setup
if (typeof window !== "undefined") {
  const rootTag = document.getElementById("trip-planner-root");
  AppRegistry.runApplication("TripPlanner", {
    rootTag,
    initialProps: {
      // You can pass initial props here if needed
    },
  });
}
