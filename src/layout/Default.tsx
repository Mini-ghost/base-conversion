import styled from 'styled-components'
import Navigation from '@/components/Navigation'

type DefaultLayout = {
  children: JSX.Element
}

const Layout = styled.div`
  width: 95%;
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-top: calc(1.5rem + 2vw);
    padding-bottom: calc(1.5rem + 2vw);
  }
`

const BaseTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
`

export default function Default (props: DefaultLayout) {
  const { children } = props
  return (
    <Layout>
      <BaseTitle>
        進制轉換
      </BaseTitle>
      { children}
      <Navigation />
    </Layout>
  )
}
