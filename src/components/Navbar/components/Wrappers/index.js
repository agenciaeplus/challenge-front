import { FlexWrapperStyle, WrapperMenuAnchorStyle } from './styles';

export function FlexWrapper({ children }) {
  return <FlexWrapperStyle>{children}</FlexWrapperStyle>;
}

export function WrapperMenuAnchor({ children }) {
  return <WrapperMenuAnchorStyle>{children}</WrapperMenuAnchorStyle>;
}
