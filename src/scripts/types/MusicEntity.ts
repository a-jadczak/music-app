export const MusicEntity = {
  Artist: 'Artist',
  Album: 'Album',
  Playlist: 'Playlist',
} as const;

export type MusicEntity = typeof MusicEntity[keyof typeof MusicEntity];
