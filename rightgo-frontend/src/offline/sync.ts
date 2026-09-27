export interface OfflineQueueItem {
  id: string;
  action: string;
  payload: unknown;
  timestamp: number;
}

const STORAGE_KEY = 'rightgo_offline_queue';

export class OfflineSyncService {
  static getQueue(): OfflineQueueItem[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static addToQueue(action: string, payload: unknown): void {
    const queue = this.getQueue();
    const item: OfflineQueueItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      action,
      payload,
      timestamp: Date.now(),
    };
    queue.push(item);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
    }
  }

  static clearQueue(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  static isOnline(): boolean {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  }
}
