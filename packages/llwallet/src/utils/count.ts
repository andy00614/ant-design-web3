function formatCount(count: number) {
  // 需要将数字转化成，分隔符的形式
  return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default formatCount;
