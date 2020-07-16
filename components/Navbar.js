import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledNavbar = styled.header`
  height: 55px;
  ${tw`bg-white shadow flex items-center`}
`

const StyledNavbarInner = styled.header`
  ${tw`grid grid-cols-4 col-gap-8 items-center bg-white h-12`}

  .logo {
    ${tw`text-xl uppercase font-bold`}
  }

  .navlinks {
    a {
      ${tw`uppercase mr-2 text-sm`}

      &.active {
        ${tw`font-bold`}
      }

      &:last-child {
        ${tw`mr-0`}
      }
    }
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarInner tw="container m-auto">
        <div className="logo">
          <h3>Logo</h3>
        </div>

        <div tw="col-span-2">
          <input
            type="text"
            tw="border border-gray-400 focus:border-gray-800 focus:outline-none p-1 w-full"
          />
        </div>

        <div tw="hidden md:block" className="navlinks">
          <a className="active" href="#">
            Home
          </a>
          <a href="#">Portfolios</a>
          <a href="#">Contacts</a>
        </div>
      </StyledNavbarInner>
    </StyledNavbar>
  )
}

export default Navbar
