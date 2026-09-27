export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getStatusBadgeClass(status: string): string {
  switch (status) {
    case 'delivered':
    case 'completed':
    case 'available':
      return 'badge-success';
    case 'in_transit':
    case 'dispatched':
    case 'loading':
      return 'badge-warning';
    case 'failed':
    case 'cancelled':
    case 'critical':
      return 'badge-danger';
    default:
      return 'badge-neutral';
  }
}
