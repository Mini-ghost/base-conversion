
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = styled.nav`
  text-align: center;
  padding-top: .5rem;
  padding-bottom: .5rem;
`

/**
 * RouterLink StyledComponent
 */
const RouterLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  padding: .5rem .75rem;
  border-radius: .75rem;
  text-decoration: none;
  color: white;
  background-color: #2c9288;
  text-transform: uppercase;
  transition: .3s;
  &:hover {
    background-color: #00463f;
  }
  & + & {
    margin-left: .5rem;
  }
`

export default function NavigationBar () {
  return (
    <Navigation>
      <RouterLink
        to={location => ({ ...location, pathname: '/binary' })}
      >
        binary
      </RouterLink>
      <RouterLink
        to={location => ({ ...location, pathname: '/octal' })}
      >
        octal
      </RouterLink>
      <RouterLink
        to={location => ({ ...location, pathname: '/hexadecimal' })}
      >
        hexadecimal
      </RouterLink>
    </Navigation>
  )
}
