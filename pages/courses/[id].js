import Head from 'next/head'
import { Chip, Grid, Stack, Typography } from '@mui/material'
import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
import CartPanel from '../../components/CartPanel'
import { courses, getCourse } from '../../data/courses'

// Карточка курса: SSG + getStaticPaths — HTML для каждого id на этапе сборки
export default function CoursePage({ course, generatedAt }) {
  return (
    <>
      <Head>
        <title>{course.title} — Лекториум</title>
      </Head>
      <Layout title={course.title}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }} alignItems="center">
          <Chip label="SSG · getStaticPaths + getStaticProps" color="primary" size="small" />
          <Typography variant="body2" color="text.secondary">
            Собрано при build: {generatedAt}
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ProductCard {...course} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CartPanel />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: courses.map((c) => ({ params: { id: c.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const course = getCourse(params.id)
  if (!course) {
    return { notFound: true }
  }
  return {
    props: {
      course,
      generatedAt: new Date().toISOString(),
    },
  }
}
