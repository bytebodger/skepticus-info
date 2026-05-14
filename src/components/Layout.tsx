import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main" tabIndex={-1}>
        <Outlet />
      </div>
    </div>
  );
}
