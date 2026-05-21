<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="pl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sitemap XML | Konstytucja 3 Maja dla uczniów</title>
        <style>
          :root {
            color-scheme: light;
            --bg: #fbf7ec;
            --surface: #fffdf7;
            --text: #151922;
            --muted: #4b5568;
            --navy: #17345c;
            --crimson: #941f32;
            --gold: #c99a35;
            --border: #e4d1a8;
          }

          body {
            background: var(--bg);
            color: var(--text);
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            margin: 0;
          }

          main {
            margin: 0 auto;
            max-width: 1040px;
            padding: 48px 20px;
          }

          header {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 28px;
          }

          h1 {
            color: var(--navy);
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            line-height: 1.1;
            margin: 0;
          }

          p {
            color: var(--muted);
            font-size: 1rem;
            line-height: 1.7;
            margin: 14px 0 0;
          }

          table {
            background: var(--surface);
            border: 1px solid var(--border);
            border-collapse: collapse;
            border-radius: 10px;
            margin-top: 28px;
            overflow: hidden;
            width: 100%;
          }

          th,
          td {
            border-bottom: 1px solid var(--border);
            padding: 14px;
            text-align: left;
            vertical-align: top;
          }

          th {
            background: #f2e7d0;
            color: var(--navy);
            font-size: 0.82rem;
            text-transform: uppercase;
          }

          a {
            color: var(--navy);
            font-weight: 700;
            text-decoration-color: var(--gold);
            text-underline-offset: 0.18em;
          }

          .meta {
            color: var(--crimson);
            font-weight: 800;
            letter-spacing: 0;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <main>
          <header>
            <p class="meta">Sitemap XML</p>
            <h1>Konstytucja 3 Maja dla uczniów</h1>
            <p>
              To mapa XML dla wyszukiwarek. Czytelną wersję dla użytkowników znajdziesz pod adresem
              <a href="mapa-strony">/mapa-strony</a>.
            </p>
          </header>

          <table>
            <thead>
              <tr>
                <th>Adres</th>
                <th>Aktualizacja</th>
                <th>Częstotliwość</th>
                <th>Priorytet</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc" />
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc" />
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod" /></td>
                  <td><xsl:value-of select="sitemap:changefreq" /></td>
                  <td><xsl:value-of select="sitemap:priority" /></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
