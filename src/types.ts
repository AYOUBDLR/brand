export interface MirrorNode {
  id: string;
  name: string;
  region: string;
  speed: string;
  ping: number;
  status: 'online' | 'busy' | 'fastest';
  load: number;
}

export interface SyncStep {
  id: number;
  label: string;
  status: 'pending' | 'in_progress' | 'completed';
}

export interface MediaItem {
  id: string;
  title: string;
  displayTitle: string;
  emoji: string;
  badge: string;
  bannerPortalText: string;
  subtitle: string;
  avatarUrl: string;
  previewUrl: string;
  boxsetBadge: string;
  hdrBadge: string;
  watchButtonText: string;
  fileSize: string;
  rating: string;
  year: string;
  directorOrStudio: string;
  resolution: string;
  description: string;
  redirectUrl: string;
}

