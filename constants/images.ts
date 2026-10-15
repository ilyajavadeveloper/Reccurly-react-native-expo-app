export const images = {
    splashPattern: require("../assets/images/splash-pattern.png"),
    avatar: require("../assets/images/avatar.png"),
} as const;

export type ImageKey = keyof typeof images;