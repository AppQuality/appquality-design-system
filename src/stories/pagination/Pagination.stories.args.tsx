export const BasicPaginationArgs = {
  maxPages: 10,
  current: 2,
  onPageChange: (page: number) => {
    alert(`Going to page ${page}`);
  },
};
