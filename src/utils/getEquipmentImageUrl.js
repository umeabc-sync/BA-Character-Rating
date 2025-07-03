import { getAssetsFile } from './getAssetsFile'

export function getEquipmentImageUrl(equipment) {
  if (!equipment) return ''
  return getAssetsFile(`equipment/${equipment}.webp`)
}
