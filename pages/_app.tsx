import type { AppProps } from 'next/app'
import tw, { GlobalStyles } from 'twin.macro'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <DefaultSeo
        defaultTitle="Coming soon..."
        description="Coming soon..."
        dangerouslySetAllPagesToNoFollow={true}
        dangerouslySetAllPagesToNoIndex={true}
      />
      <div css={tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <h1 css={tw`text-3xl font-semibold`}>Coming soon...</h1>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
