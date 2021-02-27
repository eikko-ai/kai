import React from 'react'
import 'twin.macro'
import { Card } from '../components/Card'

export const Home = () => {
  return (
    <section tw="h-screen bg-background dark:bg-background-dark text-white font-sans">
      <div tw="container px-5 py-24 mx-auto">
        <div tw="md:flex flex-wrap -m-4">
          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <Card
              header="Colors"
              text="Colors, Colors, Colors"
              link="/colors"
              color="green"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            />
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <Card
              header="Typography"
              text="Typography, Typography, Typography"
              link="/typography"
              color="red"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            />
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <Card
              header="Buttons"
              text="Buttons, Buttons, Buttons"
              link="/buttons"
              color="blue"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            />
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <Card
              header="Inputs"
              text="Inputs, Inputs, Inputs"
              link="/inputs"
              color="teal"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            />
          </div>

          <div tw="xl:w-1/3 md:w-1/2 p-4">
            <Card
              header="Misc"
              text="Misc, Misc, Misc"
              link="/misc"
              color="green"
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  tw="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
