function findPoisonedDuration(timeSeries: Array<number>, duration: number): number {
  let time = 0
  if (!timeSeries.length) return time
  for (let i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] > duration) {
      time += duration
    } else {
      time += timeSeries[i] - timeSeries[i - 1]
    }
  }
  return time + duration
};