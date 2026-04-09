import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  margin-bottom: 12px;
  background: #fdfcf9;
  border: 1px solid #f0eee4;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: #ffffff;
    border-color: #c39d23;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #c39d23;
  }
`;

export const Text = styled.span`
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  color: ${(props) => (props.completed ? "#95a5a6" : "#2c3e50")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: color 0.3s ease;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
