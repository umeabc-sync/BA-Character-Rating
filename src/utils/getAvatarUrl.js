import { getAssetsFile } from "./getAssetsFile";

export function getAvatarUrl(id) {
  if (!id) return '';
  return getAssetsFile(`avatar/${id}.webp`);
}