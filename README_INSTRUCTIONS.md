# Як встановити ці файли у свій проєкт (09-auth)

Ці файли — не окремий проєкт, а доповнення до твого вже наявного репозиторію
`06-notehub-nextjs` (продовження, HW-09). Розпакуй архів і перенеси файли
у відповідні місця свого проєкту, зберігаючи структуру папок.

## 1. Встанови пакет для парсингу cookie
```bash
npm i cookie
npm i zustand
```
(zustand потрібен для authStore; якщо вже встановлений — пропусти)

## 2. Скопіюй файли з архіву у проєкт

| Файл в архіві | Куди покласти |
|---|---|
| `app/api/**` | `app/api/**` (готові серверні роути — нічого не змінюй) |
| `app/(auth routes)/layout.tsx` | `app/(auth routes)/layout.tsx` |
| `app/(auth routes)/sign-in/*` | `app/(auth routes)/sign-in/*` |
| `app/(auth routes)/sign-up/*` | `app/(auth routes)/sign-up/*` |
| `app/(private routes)/layout.tsx` | `app/(private routes)/layout.tsx` |
| `app/(private routes)/profile/*` | `app/(private routes)/profile/*` |
| `components/AuthNavigation/*` | `components/AuthNavigation/*` |
| `components/AuthProvider/*` | `components/AuthProvider/*` |
| `lib/api/api.ts` | `lib/api/api.ts` (заміни, якщо вже існує) |
| `lib/api/clientApi.ts` | `lib/api/clientApi.ts` (заміни, перенеси свій старий вміст, якщо там було більше функцій) |
| `lib/api/serverApi.ts` | `lib/api/serverApi.ts` |
| `lib/store/authStore.ts` | `lib/store/authStore.ts` |
| `types/user.ts` | `types/user.ts` |
| `types/note.ts` | НЕ заміняй, якщо в тебе вже є свій — просто перевір, що там тільки тип `Note` |
| `proxy.ts` | у корінь проєкту, поруч з `package.json` |
| `next.config.ts` | заміни свій, додавши секцію `images.remotePatterns`, якщо у тебе вже є свій конфіг — просто додай туди цю секцію вручну |
| `.env.local.example` | перейменуй на `.env.local` і встав своє значення |

Файли з суфіксом `.PATCH_EXAMPLE.tsx` — це НЕ файли для копіювання,
а приклади того, як відредагувати вже наявні `Header.tsx` та `app/layout.tsx`.

## 3. Онови Header.tsx
Додай імпорт `AuthNavigation` і встав `<AuthNavigation />` в кінець `<ul>` —
дивись `components/Header/Header.PATCH_EXAMPLE.tsx`.

## 4. Онови app/layout.tsx
Обгорни весь контент компонентом `<AuthProvider>` всередині `<TanStackProvider>` —
дивись `app/layout.PATCH_EXAMPLE.tsx`.

## 5. Стилі
Стилі для сторінок sign-in/sign-up/profile/profile-edit/AuthNavigation вже
скопійовані в архів з офіційного репозиторію стилів (гілка `hw-09-styles`).

## 6. Змінні оточення на Vercel
Після деплою обов'язково додай `NEXT_PUBLIC_API_URL` зі значенням URL твого
застосунку на Vercel (Project → Settings → Environment Variables), інакше
`/api` роути не працюватимуть на проді.

## 7. Перевір локально
```bash
npm run dev
```
Відкрий `/sign-up`, зареєструйся → має редіректнути на `/profile`.
Спробуй `/profile/edit`, зміни username → Save → перевір редірект назад.
Вийди через Logout → спробуй відкрити `/profile` неавторизованим → має
редіректнути на `/sign-in`.
