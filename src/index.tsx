import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import Layout from './components/Layout'

const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .get('/', () => <Layout>Home</Layout>)
  .get('/about', () => <h1 class="text-red-100">About</h1>)
  .listen(3000)

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)
