function generateRandomNumber() {
  const min = 100000; // 最小值为100000
  const max = 999999; // 最大值为999999
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
}

export const getNaMs = () => {
  const timestampInMilliseconds = Date.now();
  const highPrecisionDifference = performance.now();

  const randomNumber = generateRandomNumber();
  // 将两个时间戳组合，获取近似的纳秒级时间戳
  const timestampInNanoseconds = BigInt(
    (timestampInMilliseconds + highPrecisionDifference) * 1000000,
  );
  return timestampInNanoseconds;
};
