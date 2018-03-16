import React from 'react'
import styled from 'styled-components'
import { theme, Text, Button } from '@aragon/ui'
import { lerp } from '../math-utils'

class Launch extends React.PureComponent {
  render() {
    const { hideProgress, onConfirm } = this.props
    return (
      <Main
        style={{
          opacity: 1 - Math.abs(hideProgress),
          willChange: 'transform',
          transform: `translateX(${lerp(hideProgress, 0, 50)}%)`,
        }}
      >
        <Content>
          <Title>
            <Text size="great" weight="bold" color={theme.textDimmed}>
              All done! Your decentralized organization will be ready in a
              moment.
            </Text>
          </Title>
          <StyledButton mode="strong" onClick={onConfirm}>
            Get Started
          </StyledButton>
        </Content>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 37px;
  text-align: center;
  margin: 0 12% 40px;
`

const StyledButton = styled(Button)`
  width: 170px;
`

export default Launch
