import StandardButton from "../Buttons";
import { SelectorValue, SelectorWrapper } from "./styles";

interface SelectorProps {
  selectorValue: any;
  setSelectorValue: any;
  checkout?: boolean;
}

const Selector: React.FC<SelectorProps> = ({
  selectorValue,
  setSelectorValue,
  checkout,
}) => {
  const increaseValue = () => {
    setSelectorValue(selectorValue + 1);
  };

  const decreaseValue = () => {
    if (selectorValue > 1) {
      setSelectorValue(selectorValue - 1);
    }
  };
  return (
    <SelectorWrapper checkout={checkout}>
      <StandardButton onClick={() => decreaseValue()}>-</StandardButton>
      <SelectorValue>{selectorValue}</SelectorValue>
      <StandardButton onClick={() => increaseValue()}>+</StandardButton>
    </SelectorWrapper>
  );
};
export default Selector;
