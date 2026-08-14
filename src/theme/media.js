import tokens from "./tokens";

export const media = {
  down: (key) => `@media screen and (max-width: ${tokens.breakpoints[key] - 0.02}px)`,
  up: (key) => `@media screen and (min-width: ${tokens.breakpoints[key]}px)`,
};

export default media;
