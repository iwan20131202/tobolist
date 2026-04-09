import { Input } from "./Filter.styled";

const Filter = (props) => {
  return (
    <Input
      value={props.value}
      placeholder="Фільтр по імені"
      onChange={props.onChange}
    />
  );
};

export default Filter;
