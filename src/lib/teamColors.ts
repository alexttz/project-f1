export const TEAM_COLORS: Record<string, string> = {
  "Alpine": "#2293D1",
  "Aston Martin": "#006F62",
  "Audi": "#ff2f00",
  "Cadillac": "#0B1E6B",
  "Ferrari": "#DC0000",
  "Haas": "#B6BABD",
  "McLaren": "#FF8700",
  "Mercedes": "#00D2BE",
  "Racing Bulls": "#2B4562",
  "Red Bull Racing": "#1E41FF",
  "Williams": "#005AFF",
};

export function getTeamColor(team?: string | null): string {
  if (!team) return "#0e1e92"; 
  return TEAM_COLORS[team] ?? "#0e1e92";
}