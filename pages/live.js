import Head from 'next/head'
import { Chip, Paper, Stack, Typography } from '@mui/material'
import Layout from '../components/Layout'

// Live-статус: SSR — HTML генерируется на каждый запрос
export default function LivePage({ serverTime, requestId }) {
  return (
    <>
      <Head>
        <title>Лекториум — Live SSR</title>
      </Head>
      <Layout title="Живой статус сервера">
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="SSR · getServerSideProps" color="secondary" size="small" />
        </Stack>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Страница собрана на сервере при этом запросе (не при build).
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
            Время сервера: {serverTime}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID запроса: {requestId}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Обновите страницу — время и ID изменятся. В «Просмотр кода страницы» эти
            значения уже есть в HTML.
          </Typography>
        </Paper>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  // Имитация серверных данных на каждый HTTP-запрос
  return {
    props: {
      serverTime: new Date().toISOString(),
      requestId: `req-${Date.now()}`,
    },
  }
}
