import * as nextImage from 'next/image'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../styles/common.scss'

const addParameters = require('@storybook/react').addParameters

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { width, height } = props
    const ratio = (height / width) * 100
    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: 'relative',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          {...props}
        />
      </div>
    )
  },
})

const customViewports = {
  phone5S: {
    name: 'iPhone 5S・SE1',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iphone8: {
    name: 'iPhone 8・SE2',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  ipad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#F7F8FA' },
      { name: 'dark', value: '#314565' },
      { name: 'white', value: '#FFFFFF' },
      { name: 'black', value: '#000000' },
    ],
  },
}
