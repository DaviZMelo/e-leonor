import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import { SvgIcon } from '../../../common/SvgIcon';
import { Button } from '../../../common/Button';
import { ContentBlockProps } from '../types';
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from './styles';

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const history = useHistory();
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item: any, sectionId: number) => {
                    if (item.title === 'Learn more') {
                      return (
                        <Button
                          key={sectionId}
                          color={item.color}
                          fixedWidth
                          onClick={() => history.push('/mural')}
                        >
                          {t(item.title)}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        key={sectionId}
                        color={item.color}
                        fixedWidth
                        onClick={() => scrollTo('about')}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
