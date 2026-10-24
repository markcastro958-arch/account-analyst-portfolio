// ILLUSTRATIVE SAMPLE DATA — replace with verified figures. Values are in thousands.
export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const monthly = {
  actual: [15, 27, 33, 48, 44, 58, 48, 66, 60, 72, 82, 92],
  target: [25, 40, 31, 56, 46, 62, 52, 70, 63, 76, 84, 82]
}

const avg = (arr, size) =>
  Array.from({ length: arr.length / size }, (_, i) =>
    Math.round(arr.slice(i * size, i * size + size).reduce((a, b) => a + b, 0) / size))

export const PERIODS = {
  Monthly: { labels: MONTHS, actual: monthly.actual, target: monthly.target },
  Quarterly: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    actual: avg(monthly.actual, 3),
    target: avg(monthly.target, 3)
  },
  Yearly: {
    labels: ['2023', '2024', '2025'],
    actual: [38, 51, 64],
    target: [45, 55, 62]
  }
}

export const RANGE_LABEL = 'Jan 2025 – Present'