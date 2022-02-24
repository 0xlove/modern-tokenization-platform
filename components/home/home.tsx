import React from 'react';
import {Container, Row, Col} from '../grid';
import styled from 'styled-components';
import Coins from './coins';
import Connect from './connect';
import Description from './description';
import Section from './section';
import SectionActions from './section-actions';
import World from './world';
import Button from '../button';
import SectionInfo from './section-info';
import ForCustomers from 'components/for-customers/for-customers';
import {HomeProps} from 'src/interface';
import Exchanges from 'components/exchanges/exchanges';
import {RegisterTitle} from './register-title';
import Root from 'components/root';

import {breakpoints} from 'components/grid/consts';
import ProjectsSection from 'components/project/projects-section';

const Home: React.FC<HomeProps> = ({exchanges, projects}) => {
  
  return (
    <Root>
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <Description />
          </Col>
          <Col lg={6}>
            <Coins />
          </Col>
          <ReverseRow>
            <Col lg={6}>
              <World />
            </Col>
            <Col lg={6}>
              <Connect />
            </Col>
          </ReverseRow>
          <Col sm={12}>
            <Section title="For partners" anchor="partners">
              <p>
                Invest in tokens before they are released on exchanges or
                other exchangers. Get additional income from attracting
                participants and investing in projects under the guidance
                of platform experts.
              </p>
              <SectionActions>
                <Button primary>Learn more</Button>
              </SectionActions>
            </Section>
          </Col>
          <Col sm={12}>
            <Section title="For customers">
              <p>
                Get access to all project tokenization tools on the most
                favorable terms. Audit, revision, marketing and listing
                of your projects in the most popular networks.
              </p>
              <SectionActions>
                <Button primary>Learn more</Button>
              </SectionActions>
              <SectionInfo margin='100px 0 0 0'>
                <ForCustomers />
              </SectionInfo>
            </Section>
          </Col>
          <Col sm={12}>
            <Section title="Crowdfunding">
              <p>
                We implement blockchain technologies in projects with
                MVP and help to reach a new level of maturity.
              </p>
              <SectionActions>
                <Button primary>Get started</Button>
                <Button primary>Learn more</Button>
              </SectionActions>
            </Section>
          </Col>
          <Col sm={12}>
            {exchanges && (
              <Section title="Exchanges" anchor="exchanges">
                <SectionInfo>
                  {
                    exchanges && <Exchanges exchanges={exchanges}/>
                  }
                </SectionInfo>
              </Section>
            )}
          </Col>
          <Col sm={12}>
            {projects && (
              <Section title="Our projects" anchor="projects">
                <ProjectsSection projects={projects} />
              </Section>
            )}
          </Col>
          <Col lg={12}>
            <RegisterTitle />
          </Col>
        </Row>
      </Container>
    </Root>
  );
};

export default Home;

const ReverseRow = styled(Row)`
  @media ${breakpoints.down(breakpoints.lg)} {
    flex-direction: column-reverse;
  }
`;
