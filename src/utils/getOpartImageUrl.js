import { getAssetsFile } from './getAssetsFile'

export function getOpartImageUrl(name) {
  if (!name) return ''
  return getAssetsFile(`opart/${name}.webp`)
}
