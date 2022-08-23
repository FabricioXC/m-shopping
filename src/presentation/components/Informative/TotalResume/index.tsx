import { TotalResumeWrapper } from "./styles";

interface TotalResumeProps {
  total: number;
}

const TotalResume: React.FC<TotalResumeProps> = ({ total }) => {
  return (
    <TotalResumeWrapper>
      <div>TOTAL</div>
      <div>{`R$ ${total.toFixed(2).replace(".", ",")}`}</div>
    </TotalResumeWrapper>
  );
};
export default TotalResume;
