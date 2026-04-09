import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;

  p {
    flex: 1;
    margin: 0;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #4a5a3c;
    border-bottom: 3px solid #dee2e6;
  }

  p:last-child {
    background: #e9f5ec;
    border-bottom-color: #2ecc71;
    color: #27ae60;
  }
`;
