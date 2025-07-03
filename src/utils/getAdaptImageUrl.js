import { getAssetsFile } from './getAssetsFile'

const adaptRankMap = {
  SS: 5,
  S: 4,
  A: 3,
  B: 2,
  C: 1,
  D: 0,
}

export function getAdaptImageUrl(rank) {
  const rankNumber = adaptRankMap[rank]
  if (rankNumber !== undefined) {
    return getAssetsFile(`adaptresult/Adaptresult${rankNumber}.webp`)
  }
  return '' // Return empty string or a placeholder if rank is not found
}
