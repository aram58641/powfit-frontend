/* eslint-disable @next/next/no-sync-scripts  */
import { Html, Head, Main, NextScript } from 'next/document';

function AppDocument() {
  return (
    <Html>
      <Head>
        {/* bootstrap: begin */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"
        />
        {/* bootstrap: end */}
      </Head>

      <body>
       

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default AppDocument;
