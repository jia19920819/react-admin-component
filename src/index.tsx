import * as React from 'react'
import styles from './styles.module.css'
// export { JsonPreview } from './JsonPreview';
import {Demo} from './Demo'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const FilePreviewComponent = () => {
  return <div  >111111</div>
}

export {
  Demo,
}
