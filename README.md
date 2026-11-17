# Лекториум — ИНИС, лабораторная работа №7

Next.js (Pages Router) для магазина онлайн-курсов «Лекториум». Перенос React+MUI+Redux из ЛР6 с гибридным рендерингом: **SSG** и **SSR**.

Автор: Максимович Р. А., гр. 310101, БГУИР.

## Стратегии рендеринга

| Маршрут | Стратегия | API |
|---------|-----------|-----|
| `/` | SSG | `getStaticProps` — каталог курсов на этапе сборки |
| `/courses/[id]` | SSG | `getStaticPaths` + `getStaticProps` — карточки курсов |
| `/live` | SSR | `getServerSideProps` — время сервера на каждый запрос |

Проверка: после `npm run build && npm start` откройте страницу → ПКМ → «Просмотр кода страницы». В HTML должны быть заголовки курсов / время сервера (не пустой `#__next`).

## Запуск

Нужен Node.js 20+.

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

Приложение: http://localhost:3000

## Структура

```
pages/
  index.js           SSG-каталог
  live.js            SSR-статус
  courses/[id].js    SSG + динамические пути
  _app.js / _document.js
components/          MUI-компоненты из ЛР6
store/               Redux Toolkit (корзина)
data/courses.js      mock-данные для SSG
```
