const Layout = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hello World</title>
        <link rel="stylesheet" href="/public/output.css" />
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
      </head>
      <body>
        <h1 class="bg-red-500">Hety</h1>
        <section hx-get="/about" hx-trigger="load" hx-swap="beforeend"></section>
      </body>
    </html>
  )
}

export default Layout
