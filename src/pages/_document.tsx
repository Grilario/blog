import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html lang="pt-br">
                <Head>
                    <link rel="shortcut icon" href="Logo.svg" type="image/svg"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500&display=swap" rel="stylesheet"/>
                
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-H0R7VKYBJJ"></script>
                        <script>
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                        
                          gtag('config', 'G-H0R7VKYBJJ');
                        </script>`
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
