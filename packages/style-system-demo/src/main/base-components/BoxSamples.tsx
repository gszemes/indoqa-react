import {Box} from '@indoqa/style-system'
import * as React from 'react'
import Code from '../code/Code'
import {sample1, sample2, sample3, sample4} from './BoxSamplesCode'

const BoxSamples: React.FC = () => (
  <>
    <h3>Box with margin, padding and background color</h3>
    <Box my={2} p={2} bg="primary">Box1</Box>
    <Box my={2} p={2} bg="accent">Box2</Box>
    <Code initialShow showToggle={false}>{sample1}</Code>

    <h3>Box with onClick event</h3>
    <Box my={2} p={2} bg="primary" onClick={() => alert('Box3 clicked')}>Box3</Box>
    <Code initialShow showToggle={false}>{sample2}</Code>

    <h3>Nested boxes</h3>
    <Box my={2} px={2} bg="primary">
      <Box bg="accent" mb={1} p={1}>innerBox1</Box>
      <Box bg="accent" p={1}>innerBox2</Box>
    </Box>
    <Code initialShow showToggle={false}>{sample3}</Code>

    <h3>Styled box</h3>
    <Box my={2} p={2} bg="primary" style={{color: 'white'}}>box4</Box>
    <Code initialShow showToggle={false}>{sample4}</Code>
  </>
)

export default BoxSamples
