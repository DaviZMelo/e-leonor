import { useEffect, useState } from 'react';
import { Document } from '@prismicio/client/types/documents';
import PrismicDOM from 'prismic-dom';
import { useHistory, useParams } from 'react-router-dom';
import { client } from '../../lib/prismic';
import PostContainer from '../../components/Post';
import { Button } from '../../common/Button';

interface IParams {
  slug: string;
}

const Post = () => {
  const [post, setPost] = useState<Document>(null);
  const { slug } = useParams<IParams>();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await client().getByUID('mural_post', String(slug), {});
      if (response) {
        setPost(response);
      } else {
        history.push('/mural');
      }
    };
    fetchData();
  }, [slug, history]);

  return (
    <PostContainer>
      {post && (
        <>
          <h1>{PrismicDOM.RichText.asText(post.data.title)}</h1>
          <img
            src={post.data.thumbnail.url}
            width="600"
            alt="camiseta_frontend"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(post.data.content),
            }}
          />
          <a
            href={post.data.anexo.url}
            target="_newblank"
            style={{ color: 'white', width: '100%', height: '100%' }}
          >
            <Button>Ir ao anexo</Button>
          </a>
        </>
      )}
    </PostContainer>
  );
};

export default Post;
