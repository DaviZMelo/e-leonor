import Prismic from '@prismicio/client';
import { lazy, useEffect, useState } from 'react';
import { Document } from '@prismicio/client/types/documents';
import PrismicDOM from 'prismic-dom';
import { useHistory } from 'react-router-dom';
import { client } from '../../lib/prismic';
import { Button } from '../../common/Button';

const MuralGrid = lazy(() => import('../../components/MuralGrid'));
const MuralCard = lazy(() => import('../../components/MuralGrid/MuralCard'));

const Mural = () => {
  const [posts, setPosts] = useState<Document[]>([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await client().query([
        Prismic.Predicates.at('document.type', 'mural_post'),
      ]);
      if (response) {
        setPosts(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <MuralGrid>
      {posts ? (
        <>
          {posts.map(post => {
            return (
              <>
                <MuralCard key={post.id}>
                  <h4>{PrismicDOM.RichText.asText(post.data.title)}</h4>
                  <img
                    src={post.data.thumbnail.url}
                    width="200"
                    alt="camiseta_frontend"
                  />
                  <Button
                    onClick={() => history.push(`/mural/post/${post.uid}`)}
                  >
                    Acessar
                  </Button>
                </MuralCard>
              </>
            );
          })}
        </>
      ) : (
        <h1>Carregando postagens...</h1>
      )}
    </MuralGrid>
  );
};

export default Mural;
