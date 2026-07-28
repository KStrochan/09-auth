# HW-09: Авторизація — що змінилось відносно 08-zustand

Це твій репозиторій `08-zustand` з накопиченими змінами для HW-09
(SSR/CSR авторизація, захищені маршрути, cookie-сесії). Розпакуй і онови
залежності, далі просто `git add . && git commit`.

## 1. Встанови нову залежність
```bash
npm install
```
(`cookie` вже додано в `package.json`, підтягнеться разом з рештою)

## 2. Заповни .env.local
Скопіюй `.env.local.example` → `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```
Після деплою онови значення на Vercel URL і додай той самий env var
у Project → Settings → Environment Variables на Vercel.

## 3. Що конкретно змінилось

### Бекенд
- **Замінив** `lib/api.ts` (старий бекенд + статичний токен
  `NEXT_PUBLIC_NOTEHUB_TOKEN`) на `lib/api/api.ts` + `clientApi.ts` +
  `serverApi.ts`, що ходять через власні `/api` роути з cookie-сесіями
  на новому бекенді `notehub-api.goit.study`.
- Додав `app/api/**` — готові серверні роути (login/register/logout/session,
  users/me, notes) — нічого в них не міняй, вони з офіційного репозиторію
  завдання.

### Структура маршрутів
- **Переніс** `app/notes/**` → `app/(private routes)/notes/**`
- **Переніс** `app/@modal/**` → `app/(private routes)/@modal/**`
  (обов'язково — інтерцептор модалки нотатки `(.)notes/[id]` і сам
  `notes/[id]` мають лишатись в одному layout-контексті, інакше модалка
  зламається після винесення `/notes` у приватну групу)
- Додав `app/(private routes)/layout.tsx` — тепер саме він рендерить
  `{children}` і `{modal}`-слот (раніше це робив кореневий layout)
- Додав `app/(auth routes)/layout.tsx`, `sign-in/page.tsx`, `sign-up/page.tsx`
- Додав `app/(private routes)/profile/page.tsx`,
  `app/(private routes)/profile/edit/page.tsx`
- `app/layout.tsx` більше не приймає `modal`-проп, замість цього обгорнутий
  `<AuthProvider>` всередині `<TanStackProvider>`

### Стан і компоненти
- Додав `lib/store/authStore.ts` (Zustand, поруч з твоїм `noteStore.ts`)
- Додав `components/AuthProvider/AuthProvider.tsx` — перевіряє сесію при
  завантаженні застосунку
- Додав `components/AuthNavigation/AuthNavigation.tsx` — вставлений у
  `components/Header/Header.tsx` в кінець `<ul>` навігації
- Додав `types/user.ts`

### Дрібне
- `types/note.ts`: прибрав `sortBy` з `FetchNotesParams` — новий бекенд
  його не підтримує
- `PER_PAGE` у `notes/filter/[...slug]/page.tsx` і `Notes.client.tsx`
  змінено з 10 на 12 (бекенд завжди повертає `perPage: 12`)
- `next.config.ts`: додав `images.remotePatterns` для `ac.goit.global`
  (аватарки користувачів)
- `proxy.ts` у корені — захист приватних/публічних маршрутів

## 4. Перевір локально
```bash
npm run dev
```
- `/sign-up` → реєстрація → редірект на `/profile`
- `/profile/edit` → зміни username → Save → редірект назад
- Logout → спроба відкрити `/profile` без сесії → редірект на `/sign-in`
- `/notes/filter/all` → відкриття нотатки в модалці all still works
  (перевір саме через клік по картці, не по прямому URL)
