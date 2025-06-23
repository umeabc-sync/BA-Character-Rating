import { getAssetsFile } from "./getAssetsFile";

export function getAvatarUrl(id) {
  return getAssetsFile(`avatar/${id}.png`);
}