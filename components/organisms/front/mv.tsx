import React from 'react'
import type { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const backgroundImage = '/bg.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      margin: '0 auto',
      width: '100%',
      maxWidth: '1920px',
      height: '625px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
    },
  })
)

const MV: FC = () => {
  const classes = useStyles()

  return <section className={classes.wrapper} />
}

export default MV
