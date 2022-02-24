/* eslint-disable max-len */
import {format} from 'date-fns';
import Button from 'components/button';
import Card from 'components/card';
import {Col, Container, Row} from 'components/grid';
import {Header3, Header4, Paragraph1, Paragraph3} from 'components/typography';
import React from 'react';
import styled from 'styled-components';
import Chart from '../../components/chart';
import Layout from '../layout';
import startDateIcon from '../../images/CalendarBlank.svg';
import dueDateIcon from '../../images/CalendarX.svg';
import percentIcon from '../../images/Percent.svg';
import {breakpoints} from '../../components/grid/consts';
import {GetServerSideProps} from 'next';
import getDataFromServer from '../../utils';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

interface Project {
  title: string;
  symbol: string;
  description: string;
  details: string;
  startDate: string;
  dueDate: string;
  apy: string;
  apyChanging: {
    value: number;
    date: string;
  }[];
}

const ChartPage: React.FC<{project: Project}> = ({project}) => {
  
  return(
    <Layout>
      <Container>
        <Gutters>
          <Row>
            <Col sm={12}>
              <Title>
                <Info>
                  <MainInfo>
                    <Name>{project.title}</Name>
                    <Symbol>{project.symbol}</Symbol>
                  </MainInfo>
                  <Description>{project.description}</Description>
                </Info>

                <Actions>
                  <Button primaryContent primary>Invest</Button>
                </Actions>
              </Title>
            </Col>
            <Col sm={12}>
              <ProjectDetailsCard>
                <Header4>Project details:</Header4>
                <Details>{project.details}</Details>

                <Properties>
                  <Property
                    name="Start date"
                    icon={startDateIcon.src}
                    value={format(new Date(project.startDate), 'd MMM, yyyy')}
                  />
                  <Property
                    name="Due date"
                    icon={dueDateIcon.src}
                    value={format(new Date(project.dueDate), 'd MMM, yyyy')}
                  />
                  <Property
                    name="% APY"
                    icon={percentIcon.src}
                    value={`${project.apy}%`}
                  />
                </Properties>
              </ProjectDetailsCard>
            </Col>
            <Col sm={12}>
              <Card>
                <Header4>APY Changing</Header4>
                <ChartContainer>
                  <Chart data={project.apyChanging} />
                </ChartContainer>
              </Card>
            </Col>
          </Row>
        </Gutters>
      </Container>
    </Layout>
  );
};

export default ChartPage;

export const getServerSideProps: GetServerSideProps = async (
  {query: {slug}, res, locale}
) => {

  const project = await getDataFromServer(
    `projects/${slug}`
  ) as unknown as Project[];

  if (!project) {
    res.statusCode = 404;
    res.end();

    return {
      props: {
        ...(await serverSideTranslations(
          locale ? locale: 'en',
          ['index', 'common',]
        )),
        project: null,
      },
    };
  }
  
  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale: 'en',
        ['index', 'common',]
      )),
      project,
    },
  };
};

const ProjectDetailsCard = styled(Card)`
  @media ${breakpoints.down(breakpoints.lg)} {
    padding: 0;
    background: none;
    border-radius: 0;
  }
`;

const Gutters = styled.div`
  margin-bottom: 120px;
  padding: 0 16px;

  @media ${breakpoints.up(breakpoints.lg)} {
    padding: 0 120px;
    margin-bottom: 42px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 122px;
  margin-bottom: 52px;

  @media ${breakpoints.down(breakpoints.lg)} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 42px;
    margin-bottom: 42px; 
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.down(breakpoints.lg)} {
    align-items: center;
  }
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 11px;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin-bottom: 14px;
  }
`;

const Name = styled(Header3)`
  display: inline-block;
  color: #4E60F4;
`;

const Description = styled(Paragraph1)`
  font-weight: 500;
  color: #87849C;

  @media ${breakpoints.down(breakpoints.lg)} {
    margin-bottom: 24px;
  }
`;

const Symbol = styled.span`
  background: #292738;
  border-radius: 25px;
  padding: 8px 30px;
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #171522;
  text-transform: uppercase;
  margin-left: 7px;

  @media ${breakpoints.down(breakpoints.lg)} {
    padding: 4px 13px;
    font-size: 11px;
  }
`;

const Actions = styled.div``;

const Details = styled(Paragraph3)`
  color: #BCBED3;
`;

const Properties = styled.div`
  padding-top: 87px;
  margin: -14px 0;

  display: flex;
  flex-wrap: wrap;
`;

const ChartContainer = styled.div`
  min-height: 450px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;

  & > * {
    flex-grow: 1;
  }
`;

const Property: React.FC<{name: string; value: string; icon: string}> = (
  {name, value, icon}
) => (
  <PropertyRoot>
    <PropertyHeader>
      <PropertyIcon src={icon} />
      <PropertyName>{name}</PropertyName>
    </PropertyHeader>
    <PropertyValue>{value}</PropertyValue>
  </PropertyRoot>
);

const PropertyRoot = styled.div`
  flex: 1 1 33%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 14px 0;
`;

const PropertyHeader = styled.div`
  display: flex;
  align-items: center;
`;

const PropertyIcon = styled.img`
  margin-right: 12px;
  width: 1.5rem;
  height: 1.5rem;
`;

const PropertyName = styled.span`
  white-space: nowrap;
`;

const PropertyValue = styled.div`
  margin-top: 6px;
  color: #87849C;
  font-size: 14px;
  font-weight: 500;
  line-height: 160%;
`;
