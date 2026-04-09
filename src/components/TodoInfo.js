import { Wrapper } from "./Info.styled.js";

const Info = ({ total, completed }) => {
  return (
    <Wrapper>
      <p>Всього завдань: {total}</p>
      <p>Виконано: {completed}</p>
    </Wrapper>
  );
};

export default Info;
