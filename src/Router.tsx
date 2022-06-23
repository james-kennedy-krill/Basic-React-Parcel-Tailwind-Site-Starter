import { Routes, Route, Link } from 'react-router-dom'

import { App } from './App'
import { Home } from './Home'
import { Settings } from './Settings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
