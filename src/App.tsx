import { Link, Outlet } from 'react-router-dom'

export function App() {
  return (
    <div className="p-6">
      <header className="bg-gray-200 p-4">
        <h1 className="font-bold text-2xl">The Application</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/settings">Settings</Link>
        </nav>
      </header>
      <div className="container p-4">
        <Outlet />
      </div>
    </div>
  )
}
