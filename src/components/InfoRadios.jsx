export const emojis = ["👨‍💻", "💬", "☕", "🏋️", "📚", "⏰"];
export const status = [
  {
    text: "In Progress",
    bg: "bg-yellow-in-progress",
    bgIcon: "bg-orange-accent",
    iconStatu: "assets/Time_atack_duotone.svg",
  },
  {
    text: "Completed",
    bg: "bg-green-completed",
    bgIcon: "bg-gren-success",
    iconStatu: "assets/Done_round_duotone.svg",
  },
  {
    text: "Won’t do",
    bgIcon: "bg-red-error",
    bg: "bg-pink-wont-do",
    iconStatu: "assets/close_ring_duotone.svg",
  },
];

export const isSamteStatu = (statu1, statu2) => {
    return (
      statu1.bg === statu2.bg &&
      statu1.bgIcon === statu2.bgIcon &&
      statu1.iconStatu === statu2.iconStatu
    );
  };