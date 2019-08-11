import styled from 'styled-components';
import T from 'prop-types';

export const Label = styled.div`
  margin-bottom: 8px;
`;

export const CharactersMax = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;

const Input = styled.input`
  border-radius: 8px;
  border: 1px solid
    ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.gray};
  color: ${props =>
    props.readOnly ? props.theme.colors.gray : props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.medium};
  outline: none;
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  transition: border-color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 375ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  -webkit-box-shadow: 0 0 0 1000px white inset;

  &:focus {
    border-color: ${props =>
      props.error ? props.theme.colors.error : props.theme.colors.third};
  }
  &::placeholder {
    opacity: 1;
    color: ${props => props.theme.colors.gray};
  }
  ,
'&::-webkit-input-placeholder': {
    opacity: 1;
    color: ${props => props.theme.colors.gray};
  }
  ,
'&::-moz-placeholder': {
    opacity: 1;
    color: ${props => props.theme.colors.gray};
  }
  ,
'&:ms-input-placeholder': {
    opacity: 1;
    color: ${props => props.theme.colors.gray};
  }
`;
Input.propTypes = {
  error: T.bool,
  readOnly: T.bool,
};

export { Input };

export const CharactersMaxContainer = styled.input`
  width: 100%;
  position: relative;
`;
