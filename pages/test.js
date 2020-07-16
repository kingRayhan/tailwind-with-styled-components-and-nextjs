import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const StyledRoot = styled.div`
  ${tw`container m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-8 py-8`}
`

const StyledCard = styled.div`
  ${tw`shadow-xl hover:shadow-2xl rounded-lg bg-white sm:mx-3 md:mx-0 overflow-hidden`}

  img {
    ${tw`h-64 w-full object-cover`}
  }

  h1 {
    ${tw`text-xl uppercase py-2`}
  }
  p {
    ${tw`text-sm text-gray-600`}
  }
  .cat {
    ${tw`text-indigo-500 uppercase text-xs font-bold`}
  }
`

const test = () => {
  return (
    <>
      <Navbar />
      <StyledRoot>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1477761614229-3daf5798eedd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
        <StyledCard>
          <img
            src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="cart-image"
          />
          <div tw="p-5">
            <h1>Cart title</h1>
            <div className="cat">reactjs</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, explicabo debitis architecto dolorum facere, commodi
              modi pariatur beatae dolor repellendus accusantium veritatis
              aperiam facilis minus hic, doloribus nemo vero nostrum?
            </p>
          </div>
        </StyledCard>
      </StyledRoot>
    </>
  )
}

export default test
