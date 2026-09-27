export default function HomePage() {
  return (
    <main style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>RightGo Logistics Platform</h1>
      <p style={{ color: '#666', marginTop: '0.5rem' }}>
        Next.js & TypeScript Base App running successfully.
      </p>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {['auth', 'dispatcher', 'store-manager', 'loader', 'driver'].map((route) => (
          <div
            key={route}
            style={{
              padding: '1rem 1.5rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              backgroundColor: '#f8fafc',
            }}
          >
            <strong>/{route}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
