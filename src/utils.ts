export const isValidDate = (date: any) => !isNaN(Date.parse(date));

export const sortByPropAsc = (array: any[], prop: string) =>
  array.sort((o1, o2) => {
    return o1[prop] - o2[prop];
  });
