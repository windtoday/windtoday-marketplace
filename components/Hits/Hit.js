import { Text, Flex, Divider, Box, BackgroundImage } from 'rebass'
import { Highlight } from 'react-instantsearch/dom'
import ProgressArc from 'progress-arc-component'
import getImageUrl from 'util/get-image-url'
import { ChevronDown } from 'react-feather'
import ColourMeLife from 'colour-me-life'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types'
import Tag from './Tag'

const formatter = (value, unit, suffix) => {
  if (value !== 1) unit += 's'
  return `${value}${unit.charAt(0)}`
}

const gradient = new ColourMeLife()
  .setSpectrum('#740021', '#a0002d', '#00db9d')
  .setNumberRange(0, 100)

const Content = styled(Box)`
margin: 0 .32813rem;
`
const SecondaryContent = styled(Content)`
min-width: 48px;
max-width: 3.2rem;
flex-grow: 1;
`
const PrimaryContent = styled(Content)`
flex-grow: 7;
`
const CustomProgressArc = styled(ProgressArc)`
margin: 0 !important;
height: inherit !important;
text {
  font-size: 60px !important;
}
`
const CustomBackgroundImage = styled(BackgroundImage)`
border: 1px solid #dce2e4;
border-radius: .35rem;
height: 48vw;
max-height: 312px;
padding: 0;
`
const getColor = value => `#${gradient.colourAt(value)}`

const HitComponent = ({ hit, refine }) =>
  <Box>
    <Box pt={3} pb={2} px={2}>
      <Flex direction='row'>
        <SecondaryContent>
          <CustomProgressArc
            key={hit.objectID}
            value={hit.priceScore}
            unit=''
            arcColor={getColor(hit.priceScore)}
            textColor='#3f3f3f'
            rounded
          />
        </SecondaryContent>
        <PrimaryContent>
          <Flex direction='row' justify='space-between' align='flex-start'>
            <Box>
              <Text is='span' bold>
                <Highlight attributeName='provider' hit={hit} />
              </Text>

              <Text is='span' color='gray6'>
                {' · '}
                €{hit.price}
              </Text>

              <Text is='span' color='gray6'>
                {' · '}
                <TimeAgo formatter={formatter} date={hit.timestamp} />
              </Text>
            </Box>
            <Box>
              <ChevronDown size={20} color='gray' />
            </Box>
          </Flex>
          <Box>
            <Text>
              <Highlight attributeName='title' hit={hit} />
            </Text>
          </Box>
          <Box mt={2}>
            <CustomBackgroundImage src={getImageUrl(hit, 600)} />
          </Box>
          <Box mt={2}>
            <Tag bg='blue' refine={refine} attributeName='brand' hit={hit} />
            <Tag bg='indigo' refine={refine} attributeName='model' hit={hit} />
            <Tag
              bg='violet'
              refine={refine}
              attributeName='condition'
              hit={hit}
            />
            <Tag
              bg='fuschia'
              refine={refine}
              attributeName='mast type'
              hit={hit}
            />
            <Tag
              bg='fuschia'
              refine={refine}
              attributeName='fin type'
              hit={hit}
            />
            <Tag
              bg='fuschia'
              refine={refine}
              attributeName='boom type'
              hit={hit}
            />
            <Tag
              bg='pink'
              refine={refine}
              attributeName='sail size range'
              hit={hit}
            />
            <Tag
              bg='pink'
              refine={refine}
              attributeName='board size range'
              hit={hit}
            />
            <Tag
              bg='pink'
              refine={refine}
              attributeName='mast size range'
              hit={hit}
            />
            <Tag
              bg='pink'
              refine={refine}
              attributeName='boom size range'
              hit={hit}
            />
            <Tag
              bg='red'
              refine={refine}
              attributeName='mast carbon range'
              hit={hit}
            />
          </Box>
        </PrimaryContent>
      </Flex>
    </Box>

    <Divider w={1} color='gray1' />
  </Box>

HitComponent.propTypes = {
  hit: PropTypes.object
}

export default HitComponent