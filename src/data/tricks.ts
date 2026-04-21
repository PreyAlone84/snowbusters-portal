export interface TrickVideo {
  trick: string;
  videos: string[];
}

export const tricksData: TrickVideo[] = [
  { trick: "Backside 180", videos: ["https://www.youtube.com/watch?v=ln03njzMzuk"] },
];

export function getUniqueTricks(): string[] {
  return [...new Set(tricksData.map(t => t.trick))];
}

export function getVideosByTrick(trickName: string): string[] {
  const found = tricksData.find(t => t.trick === trickName);
  return found?.videos || [];
}

export function extractVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);
  return match ? match[1] : null;
}