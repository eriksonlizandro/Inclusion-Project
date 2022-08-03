export const splitName = (toSplit, character ) => {
  const name = toSplit?.split(character)[0];
  return name?.toUpperCase();
}


export const splitStringAndGetHostName = (toSplit, character ) => {
  const name = toSplit?.split(character)[3];
  return name?.toUpperCase();
}