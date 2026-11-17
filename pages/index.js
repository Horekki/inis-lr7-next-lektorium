import Head from 'next/head'
import { Grid, Typography, Chip, Stack } from '@mui/material'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import CartPanel from '../components/CartPanel'
import { courses } from '../data/courses'

// Каталог: SSG — данные фиксируются на этапе npm run build
export default function HomePage({ courses: list, generatedAt }) {
  return (
    <>
      <Head>
        <title>Лекториум — каталог курсов</title>
      </Head>
      <Layout title="Каталог курсов">
        <Stack direction="row" spacing={1} sx={{ mb: 2 }} alignItems="center">
          <Chip label="SSG · getStaticProps" color="primary" size="small" />
          <Typography variant="body2" color="text.secondary">
            Собрано при build: {generatedAt}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2, sm: 3 }} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {list.map((course) => (
                <Grid item xs={12} sm={6} key={course.id}>
                  <ProductCard {...course} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <CartPanel />
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Mock «запрос» к каталогу на этапе сборки
  return {
    props: {
      courses,
      generatedAt: new Date().toISOString(),
    },
  }
}
