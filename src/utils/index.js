export const stylizer = arr =>
  arr.reduce(
    (acc, val) => ({
      ...acc,
      ...val
    }),
    {}
  );
