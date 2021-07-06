import { Slide } from 'react-awesome-reveal';
import { MuralContainer, MuralWrapper } from './styles';

const MuralGrid = ({ children }) => {
  return (
    <Slide direction="up" duration={1500}>
      <MuralWrapper>
        <MuralContainer>{children}</MuralContainer>
      </MuralWrapper>
    </Slide>
  );
};

export default MuralGrid;
