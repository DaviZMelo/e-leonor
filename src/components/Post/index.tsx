import { Slide } from 'react-awesome-reveal';
import { PostContainer, PostWrapper } from './styles';

const Post = ({ children }) => {
  return (
    <Slide direction="up" duration={1500}>
      <PostWrapper>
        <PostContainer>{children}</PostContainer>
      </PostWrapper>
    </Slide>
  );
};

export default Post;
