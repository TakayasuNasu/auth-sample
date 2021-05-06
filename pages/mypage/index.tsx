import React, { useEffect } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession, getSession } from 'next-auth/client'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import Layout from '../../components/organisms/front/layout'
import Loading from '../../components/organisms/common/loading'

const Page: FC = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Layout>
      <Container>
        <h2>My Page</h2>
        <h3>
          <Button
            variant="outlined"
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
          >
            Sign out
          </Button>
        </h3>
      </Container>
    </Layout>
  )
}

export default Page
