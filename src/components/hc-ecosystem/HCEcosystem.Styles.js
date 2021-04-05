import styled from 'styled-components/macro'

export const HCWrapper = styled.div`
  display: flex;
  width: 290px;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 18.8px;
  border-radius: 5px;
  font-family: muli;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px 0px;
  background-color: #ffffff;

  @media (max-width: 850px) {
    display: none;
  }
`
