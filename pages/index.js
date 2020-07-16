import React from 'react'
import tw, { css } from 'twin.macro'
import { Button, Logo } from './../components'

const IndexPage = () => (
  <div
    css={[
      tw`flex flex-col items-center`,
      /* Combine regular css and tailwind styles within backticks */
      css`
        background: linear-gradient(#db00ff, #0047ff);
        ${tw`h-screen`}
      `
    ]}
  >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default IndexPage
