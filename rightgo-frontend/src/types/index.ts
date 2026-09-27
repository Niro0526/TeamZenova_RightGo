export type UserRole = 
  | 'dispatcher' 
  | 'store_manager' 
  | 'loader' 
  | 'driver' 
  | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  outletId?: string;
}

export type OrderStatus = 
  | 'pending' 
  | 'allocated' 
  | 'loaded' 
  | 'in_transit' 
  | 'delivered' 
  | 'failed' 
  | 'cancelled';

export interface Order {
  id: string;
  trackingNumber: string;
  outletId: string;
  recipientName: string;
  address: string;
  itemsCount: number;
  weightKg: number;
  status: OrderStatus;
  createdAt: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  model: string;
  capacityKg: number;
  driverId?: string;
  status: 'available' | 'loading' | 'on_trip' | 'maintenance';
}

export interface Trip {
  id: string;
  tripNumber: string;
  vehicleId: string;
  driverId: string;
  status: 'planned' | 'loading' | 'dispatched' | 'completed' | 'cancelled';
  orderIds: string[];
  dispatchedAt?: string;
  completedAt?: string;
}

export interface Issue {
  id: string;
  tripId?: string;
  orderId?: string;
  reportedBy: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved';
  createdAt: string;
}
