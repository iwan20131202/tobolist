import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin: 60px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-top: 6px solid #c39d23;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
  font-size: 32px;
  color: #2c3e50;
  font-weight: 700;

  svg {
    color: #c39d23;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;
