import React from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import Container from '@material-ui/core/Container'

import Layout from '@/components/organisms/front/layout'
import MV from '@/components/organisms/front/mv'

const Page: FC = () => (
  <Layout>
    <MV />
    <Container>
      <p>Top</p>
      <p>
        <Link href="/mypage">
          <a>to My Page</a>
        </Link>
      </p>
    </Container>
  </Layout>
)

export default Page
