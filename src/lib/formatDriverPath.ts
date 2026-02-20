export function formatDriverPath(name: string) {
  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");

  return `/drivers/${normalized}/${normalized}_profile.png`;
}