import React from 'react'
import type { FC } from 'react'
import styles from './AppButton.module.scss'

export type ComponentProps = {
  title?: string
}

const AppButton: FC<ComponentProps> = ({ title = 'button' }) => {
  return <button className={styles.button}>{title}</button>
}

export default AppButton
