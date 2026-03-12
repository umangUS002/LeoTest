export const calculateCompatibility = (rank1, rank2) => {

  let maxDiff = 0
  let totalDiff = 0
  let n = rank1.length

  for (let i = 0; i < n; i++) {

    totalDiff += Math.abs(rank1[i] - rank2[i])
    maxDiff += n - 1
  }

  let score = 1 - (totalDiff / maxDiff)

  return Math.round(score * 100)
}