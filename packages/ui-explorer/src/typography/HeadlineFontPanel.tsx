import {Grid, Panel, Row} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {FontSizes} from '../types'
import {UIETheme} from '../uietheme/UIETheme'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'
import {FontStylePanel} from './FontStylePanel'
import {characters} from './TextSpecimen'

interface HeadlineProps extends WithUIETheme {
  fontStyles: IStyle
}

interface WithFontSize {
  fontSize: string | number | undefined
}

interface Props extends HeadlineProps {
  name: string
  fontSizes: FontSizes
}

const HeadlineSample: React.FC<HeadlineProps & WithFontSize> = ({fontStyles, fontSize, uieTheme, children}) => {
  const style: IStyle = {
    marginBottom: uieTheme.spacing.space2,
    fontSize,
  }
  return <FelaComponent style={[fontStyles, style]}>{children}</FelaComponent>
}

const renderHeadlineSizeSamples = (fontStyles: IStyle, fontSizes: FontSizes, uieTheme: UIETheme) => {
  return fontSizes.map((fontSize) => {
    return (
      <HeadlineSample fontStyles={fontStyles} fontSize={fontSize} uieTheme={uieTheme} key={fontSize}>
        The quick brown fox jumps over the lazy dog.
      </HeadlineSample>
    )
  })
}

const HeadlineFontPanel: React.FC<Props> = ({fontStyles, fontSizes, name, uieTheme}) => {
  return (
    <Grid fullWidth spacing="1rem">
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / sizes`}>
            {renderHeadlineSizeSamples(fontStyles, fontSizes, uieTheme)}
          </FontStylePanel>
        </Panel>
        <Panel>
          <FontStylePanel name={`${name} / characters`}>
            <HeadlineSample fontStyles={fontStyles} fontSize={fontSizes[0]} uieTheme={uieTheme}>
              {characters}
            </HeadlineSample>
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withUIETheme(HeadlineFontPanel)
