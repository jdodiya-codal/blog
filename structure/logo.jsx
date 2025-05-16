// ./components/Logo.tsx
export default function Logo() {
  return (
    <div style={{display: 'flex', alignItems: 'center', padding: '0.5rem'}}>
      <img src="/static/blog.svg" alt="Logo" style={{height: '2rem'}} />
      <span style={{marginLeft: '0.5rem', fontWeight: 'bold'}}>My Studio</span>
    </div>
  )
}
