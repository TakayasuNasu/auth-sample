import React from 'react'
import type { FC } from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../../../components/organisms/front/layout'

const Page: FC = ({ id }: any) => {
  return (
    <Layout>
      <p>{id}</p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  return { props: { id } }
}

export default Page
