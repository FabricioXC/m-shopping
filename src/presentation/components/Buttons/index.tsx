import { ButtonWrapper } from "./styles";

interface StandardButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StandardButton: React.FC<StandardButtonProps> = ({
  children,
  onClick,
}) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};
export default StandardButton;
