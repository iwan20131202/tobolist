// TodoEditor.styled.js
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  font-size: 15px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #c39d23;
  }
`;

export const Button = styled.button`
  padding: 0 24px;
  background: #c39d23;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.1s;

  &:hover {
    background: #a6851d;
  }

  &:active {
    transform: scale(0.96);
  }
`;
