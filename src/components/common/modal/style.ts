import styled from 'styled-components/macro'

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .4em;
  background: #FFDF82;
  z-index: 9999;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.5);
  width: max-content;
`

export const S = { Modal }