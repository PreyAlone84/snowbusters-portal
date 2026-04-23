import { NavLink } from "react-router-dom";
import { Video, Youtube, Sparkles, Menu, X, Users } from "lucide-react";
import { useState } from "react";
import styles from "./Layout.module.scss";
import { cn } from "../../utils/cn";

const navItems = [
  { to: "/", icon: Video, label: "Камеры" },
  { to: "/channels", icon: Youtube, label: "Каналы" },
  { to: "/tricks", icon: Sparkles, label: "Трюки" },
  { to: "/community", icon: Users, label: "Community" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside className={cn(styles.sidebar, mobileOpen && styles.sidebarOpen)}>
        <div className={styles.logo}>Snowbusters</div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(styles.navItem, isActive && styles.navItemActive)
              }
              onClick={() => setMobileOpen(false)}
              end={item.to === "/"}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      )}

      <main className={styles.main}>
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {children}
      </main>
    </div>
  );
}

