export const PlatformSizes = {
  s: `24" x 60" - $450`,
  m: `32" x 68" - $500`,
  l: `36" x 75" - $550`,
  c: `Custom - quote`,
};

export const getPlatformSizeFromKey = (key: string) => {
  switch (key) {
    case "s":
      return PlatformSizes.s;
    case "m":
      return PlatformSizes.m;
    case "l":
      return PlatformSizes.l;
    case "c":
      return PlatformSizes.c;
    default:
      return "None selected";
  }
};
