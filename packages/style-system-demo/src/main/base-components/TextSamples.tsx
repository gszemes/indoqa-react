import {Text} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {sample1} from './TextSamplesCode'

const TextSamples: React.FC = () => (
  <>
    <h3>Text</h3>
    <Text pr={1} style={{color: 'red'}}>Text1</Text>
    <Text pr={1}>Text2</Text>
    <Code initialShow showToggle={false}>{sample1}</Code>
  </>
)

export default TextSamples
