// today as YYYY-MM-DD in Dhaka time
export const todayDhaka = () =>
  new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });

export const formatDate = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
  });

// profile photo, or a letter avatar if there is none
export const avatarFor = (user) =>
  user?.image ||
  `https://ui-avatars.com/api/?background=0d9488&color=fff&name=${encodeURIComponent(user?.name || "U")}`;