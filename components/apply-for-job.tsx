import {Form, Formik, FormikHelpers} from 'formik';
import React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {getStrapiURL} from '../utils/api';
import Button from './button';
import {Debug, FileInput, LocationInput, Switch, TextInput} from './form';
import {breakpoints} from './grid/consts';
import {Header3} from './typography';

const initialValues = {
  title: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  resume: null as File | null,
  coverLetter: null as File | null,
  authQuestion: null as boolean | null,
  sponsorshipQuestion: null as boolean | null,
  linkedIn: '',
  howDidYouHear: '',
  biggestGrowth: '',
  whyDoYouWant: '',
};

type FormProps = typeof initialValues;

const ApplyForJob: React.FC = () => {
  const {t} = useTranslation('applyForJob');

  const handleSubmit = React.useCallback(
    (values: FormProps, formik: FormikHelpers<FormProps>) => {
      const formData = new FormData();
      const data: Record<string, unknown> = {};

      for (const [key, value] of Object.entries(values)) {
        if (value instanceof File) {
          formData.append(`files.${key}`, value);
        } else {
          data[key] = value;
        }
      }

      formData.append('data', JSON.stringify(data));

      return fetch(getStrapiURL('candidates'), {
        method: 'POST',
        body: formData,
      }).then(res => {
        if (res.ok) {
          formik.resetForm();
        }
      });
    },
    [],
  );

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({isSubmitting}) => (
        <Form>
          <Debug />

          <Block padding>
            <Container>
              <Row>
                <Col sm={12}>
                  <HeaderContainer>
                    <Title>{t('formTitle')}</Title>
                    <Notice>* {t('required')}</Notice>
                  </HeaderContainer>
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('title')}
                    name="title"
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('lastName')}
                    name="lastName"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    type="email"
                    label={t('email')}
                    name="email"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    type="tel"
                    label={t('phone')}
                    name="phone"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <LocationInput
                    label={t('location')}
                    locateLabel={t('locateMe')}
                    name="location"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <FileInput
                    label={t('resume')}
                    name="resume"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <FileInput
                    label={t('coverLetter')}
                    name="coverLetter"
                  />
                </Col>
              </Row>
            </Container>
          </Block>
          <Block>
            <Container>
              <Row>
                <Col sm={12}>
                  <Switch
                    label={t('authQuestion')}
                    name="authQuestion"
                    required
                  />
                </Col>
                <Col sm={12}>
                  <Switch
                    label={t('sponsorshipQuestion')}
                    name="sponsorshipQuestion"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('linkedIn')}
                    name="linkedIn"
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('howDidYouHear')}
                    name="howDidYouHear"
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('biggestGrowth')}
                    name="biggestGrowth"
                    placeholder={t('biggestGrowthPlaceholder')}
                    multiline
                    required
                  />
                </Col>
                <Col sm={12} lg={6}>
                  <TextInput
                    label={t('whyDoYouWant')}
                    name="whyDoYouWant"
                    multiline
                  />
                </Col>
              </Row>
            </Container>
          </Block>
          <Container>
            <Row>
              <Col sm={12}>
                <ButtonContainer>
                  <Button primary primaryContent disabled={isSubmitting}>
                    Submit application
                  </Button>
                </ButtonContainer>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default ApplyForJob;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`;

const Title = styled(Header3)`
  color: #4E60F4;
`;

const Notice = styled.div`
  color: #CF5BDB;
  font-size: 1.25rem;

  @media ${breakpoints.down(breakpoints.md)} {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 30px 0;

  @media ${breakpoints.up(breakpoints.lg)} {
    padding: 120px 0;
  }
`;

const Block = styled.div<{padding?: boolean}>`
  border-top: 1px solid #36324B;

  ${({padding}) => padding && `
    padding-bottom: 120px;
  `}

  @media ${breakpoints.down(breakpoints.lg)} {
    padding-bottom: 42px 0;
  }
`;
