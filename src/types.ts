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

export type ModalMode = 'none' | 'syncing' | 'ready' | 'video_player' | 'node_settings';
