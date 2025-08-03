
    //  Quick Actions used in Quick Action Card

const QuickActions = [
  {
    icon: "add-circle-outline" as const,
    title: "Add\nMedication",
   route: "/medications/add-medication" as const,
    color: "#2E7D32",
    gradient: ["#4CAF50", "#2E7D32"] as [string, string],
  },
  {
    icon: "calendar-outline" as const,
    title: "Calendar\nView",
    route: "/" as const,
    color: "#1976D2",
    gradient: ["#2196F3", "#1976D2"] as [string, string],
  },
  {
    icon: "time-outline" as const,
    title: "History\nLog",
   route: "/" as const,
    color: "#C2185B",
    gradient: ["#E91E63", "#C2185B"] as [string, string],
  },
  {
    icon: "medical-outline" as const,
    title: "Refill\nTracker",
    route: "/" as const,
    color: "#E64A19",
    gradient: ["#FF5722", "#E64A19"] as [string, string],
  },
];

export default QuickActions