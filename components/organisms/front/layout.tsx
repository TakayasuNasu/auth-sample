import React from 'react'
import Head from 'next/head'
import type { FC } from 'react'

import Header from './header'

type ComponentProps = {
  title?: string
}

const Layout: FC<ComponentProps> = ({ children, title = 'auth-sample' }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default Layout
