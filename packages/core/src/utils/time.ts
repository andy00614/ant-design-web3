// 获取纳秒
export const getNaMs = () => {
  const timestampInMilliseconds = Date.now();
  const highPrecisionDifference = performance.now();

  // 将两个时间戳组合，获取近似的纳秒级时间戳
  const timestampInNanoseconds = (timestampInMilliseconds + highPrecisionDifference) * 1000000;
  return timestampInNanoseconds;
};
