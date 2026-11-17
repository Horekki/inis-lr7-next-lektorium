// Mock-каталог курсов «Лекториум» (данные для SSG на этапе сборки)
export const courses = [
  {
    id: 'ts-basics',
    title: 'Онлайн-курс «Основы TypeScript»',
    price: 49,
    description:
      'Базовый курс по TypeScript: типы, интерфейсы, дженерики и практика в React-проектах.',
    image: '/assets/course.svg',
  },
  {
    id: 'react-patterns',
    title: 'Онлайн-курс «Паттерны React»',
    price: 59,
    description:
      'Композиция компонентов, управление состоянием и типичные архитектурные решения.',
    image: '/assets/course.svg',
  },
  {
    id: 'web-a11y',
    title: 'Онлайн-курс «Веб-доступность»',
    price: 45,
    description:
      'WCAG, семантика, клавиатурная навигация и проверка интерфейсов скринридером.',
    image: '/assets/course.svg',
  },
]

export function getCourse(id) {
  return courses.find((c) => c.id === id) || null
}
