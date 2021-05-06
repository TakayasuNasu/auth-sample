import React from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapperButtonBlock: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '20px',
      marginLeft: 'auto',
    },
    buttonBlockLeft: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    buttonBlockFight: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    },
  })
)

const Header: FC = () => {
  const classes = useStyles()
  const [session, loading] = useSession()

  const listItems = (() => {
    if (!session) {
      return (
        <React.Fragment>
          <li>
            <Button
              variant="outlined"
              disabled={loading}
              onClick={() =>
                signIn('cognito', {
                  callbackUrl: 'http://localhost:3000/mypage',
                })
              }
            >
              Log in
            </Button>
          </li>
          <li>
            <Button
              variant="outlined"
              disabled={loading}
              onClick={() => signIn('cognito')}
            >
              Sign up
            </Button>
          </li>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <li>
            <Link href="/mypage">
              <Button variant="outlined" color="primary">
                My page
              </Button>
            </Link>
          </li>
          <li>
            <AccountCircleOutlinedIcon />
          </li>
        </React.Fragment>
      )
    }
  })()

  return (
    <header>
      <AppBar position="static" color="secondary">
        <Container className={classes.container}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Auth Sample</Typography>
          <div className={classes.wrapperButtonBlock}>
            <ul className={classes.buttonBlockLeft}>
              <li>
                <Link href="/about">
                  <Button variant="outlined" color="primary">
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <Button variant="outlined" color="primary">
                    Courses
                  </Button>
                </Link>
              </li>
            </ul>
            <ul className={classes.buttonBlockFight}>{listItems}</ul>
          </div>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
