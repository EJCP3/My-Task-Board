

export const tasks = [
  {
    id: 1,
    title: "Task in Progress",
    descripción: "I still haven't finished the task",
    icon: "⏰",
    status: {
      bg: "bg-yellow-in-progress",
      bgIcon: "bg-orange-accent",
      iconStatu:"assets/Time_atack_duotone.svg",
    },
  },
  {
    id: 2,
    title: "Task Completed",
    descripción: "I finished my task",
    icon: "🏋️",
    status: {
      bg: "bg-green-completed",
      bgIcon: "bg-gren-success",
      iconStatu: "assets/Done_round_duotone.svg",
    },
  },
  {
    id: 3,
    title: "Task Won’t do",
    descripción: "I will do this practice",
    icon: "☕",
    status: {
      bg: "bg-pink-wont-do",
      bgIcon: "bg-red-error",
      iconStatu: "assets/close_ring_duotone.svg",
    },
  },

  {
    id: 4,
    title: "Task To Do",
    descripción: "Work on a challenge on devChallenges.io, learn TypeScript",
    icon: "📚",
    status: {
      bg: "bg-light-gray",
      bgIcon: "",
      iconStatu: "",
    },
  },
];
