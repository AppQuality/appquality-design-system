import { PageItem } from "./PaginationProps";
export const generateShrinkedPages = (
  current: number,
  maxPages: number,
  size: number,
  onPageChange: Function
) => {
  let segments = [];
  segments.push([1, size + 2]);
  while (segments[segments.length - 1][1] + size + 2 < maxPages) {
    segments.push([
      segments[segments.length - 1][1] + 1,
      segments[segments.length - 1][1] + size,
    ]);
  }
  segments.push([segments[segments.length - 1][1] + 1, maxPages]);
  if (!segments.length) return [];

  let i = 0;
  while (current < segments[i][0] || current > segments[i][1]) {
    i++;
  }
  let currentSegment: Array<PageItem> = [];
  for (let j = segments[i][0]; j <= segments[i][1]; j++) {
    currentSegment.push({
      page: j,
      action: onPageChange,
      flat: j !== current,
    });
  }
  let goToPrevSegment = () => {};
  if (i > 0) {
    let prevSegmentPage = segments[i - 1][1];
    goToPrevSegment = () => {
      onPageChange(prevSegmentPage);
    };
  }
  let goToNextSegment = () => {};
  if (i < segments.length - 1) {
    let nextSegmentPage = segments[i + 1][0];
    goToNextSegment = () => {
      onPageChange(nextSegmentPage);
    };
  }

  let pages: Array<PageItem> = [];
  let beforeArray: Array<PageItem> = [
    { page: 1, flat: current !== 1, action: onPageChange },
    { page: "...", flat: true, action: goToPrevSegment },
  ];
  let afterArray: Array<PageItem> = [
    { page: "...", flat: true, action: goToNextSegment },
    {
      page: maxPages,
      flat: maxPages !== current,
      action: onPageChange,
    },
  ];
  if (currentSegment[0].page === 1) {
    pages = currentSegment.concat(afterArray);
  } else if (currentSegment[currentSegment.length - 1].page === maxPages) {
    pages = beforeArray.concat(currentSegment);
  } else {
    pages = beforeArray.concat(currentSegment, afterArray);
  }
  return pages;
};
