import React from 'react'
import type { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../../components/organisms/front/layout'
import { useAppContext } from '@/context/store'

const Page: FC = ({ id }: any) => {
  const store = useAppContext()
  const title = store.title
  const description = store.description

  return (
    <Layout>
      <p>
        {id} {title} - {description}
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  return { props: { id } }
}

export default Page
