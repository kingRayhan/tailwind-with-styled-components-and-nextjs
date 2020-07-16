import React from 'react'
import Theme from './../components/Theme'
import 'tailwindcss/dist/base.min.css'
import tw from 'twin.macro'
import styled from 'styled-components'

const RootStyle = styled.div`
  min-height: 100vh;
  ${tw`bg-gray-200`}
`

const App = ({ Component, pageProps }) => (
  <Theme>
    <RootStyle>
      <Component {...pageProps} />
    </RootStyle>
  </Theme>
)

export default App
