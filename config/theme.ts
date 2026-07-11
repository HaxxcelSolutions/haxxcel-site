export type Theme = "light" | "dark" | "system";

export const themeConfig: { defaultTheme: Theme; supported: Theme[] } = {
  defaultTheme: "system",
  supported: ["light", "dark", "system"],
};
