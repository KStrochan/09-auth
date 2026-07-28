'use client';

import { useRouter } from 'next/navigation';
import { logout as logoutApi } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import css from './AuthNavigation.module.css';

export default function AuthNavigation() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logoutApi();
    clearIsAuthenticated();
    router.push('/sign-in');
  };

  if (isAuthenticated) {
    return (
      <>
        <li className={css.navigationItem}>
          <a href="/profile" prefetch={false} className={css.navigationLink}>
            Profile
          </a>
        </li>

        <li className={css.navigationItem}>
          <p className={css.userEmail}>{user?.email}</p>
          <button className={css.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </>
    );
  }

  return (
    <>
      <li className={css.navigationItem}>
        <a href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </a>
      </li>

      <li className={css.navigationItem}>
        <a href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </a>
      </li>
    </>
  );
}
