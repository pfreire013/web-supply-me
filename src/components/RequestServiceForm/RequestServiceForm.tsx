import React, { useRef, useState } from 'react';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import InputMask from 'react-input-mask';
import Services from '../../API/Services';
import {
  FormContainer,
  InputText,
  useStyles,
  LineContainer,
  InputSelect,
  SelectContainer,
  SelectLabel,
  SelectOption,
  CheckboxContainer,
  InputCheckbox,
  InputTextArea,
  RadioContainer,
  RadioLabel,
  InputRadio,
  RadioOption,
  CardRadio,
  ButtonRequest,
  TextRequest,
  LabelForm,
  PlatformChooseContainer,
  PlatformOptions,
  PlatformDescription,
  SelectError,
} from './styles';
import PlatfomOption from '../PlatfomOption';
import theme from '../../theme';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  postalCode: string;
  address: string;
  complement?: string;
  language: string;
  mandatoryLanguage?: boolean;
  serviceDescription?: string;
  urgentService?: string;
  contactPlatform?: Array<string>;
}

const RequestServiceForm: React.FC = () => {
  const classes = useStyles();
  const useTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#3574F2',
      },
    },
  });
  const [platforms, setPlatforms] = useState<string[]>([]);
  const formRef = useRef<FormikProps<FormValues>>(null);

  const handleOnSubmit = (values: FormValues) => {
    console.log('values', values);
    console.log('platforms', platforms);
    Services.requestService();
  };

  const handleSetPlatform = (platform: string) => {
    if (platforms.includes(platform)) {
      const index = platforms.indexOf(platform);
      if (index > -1) {
        platforms.splice(index, 1);
      }
      return;
    }
    platforms.push(platform);
    setPlatforms(platforms);
  };

  const handleGoogleAutoComplete = (nativeEvent: any) => {
    console.log('event', nativeEvent.target.value);
    const InputAddress = nativeEvent.target.value;
    formRef.current?.setFieldValue('address', InputAddress);
    Services.getGoogleLocatio(InputAddress)
      .then(res => console.log('res', res))
      .catch(e => console.log('e', e));
  };

  return (
    <FormContainer>
      <ThemeProvider theme={useTheme}>
        <Formik
          innerRef={formRef}
          onSubmit={values => handleOnSubmit(values)}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            postalCode: '',
            address: '',
            complement: '',
            language: '',
            mandatoryLanguage: undefined,
            serviceDescription: '',
            urgentService: '',
            contactPlatform: undefined,
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('Fist Name is a required field'),
            lastName: Yup.string().required('Last Name is a required field'),
            email: Yup.string()
              .email('Email is not a valid')
              .required('Email is a required field'),
            phone: Yup.string()
              .min(12, 'Phone number is not a valid')
              .required('Phone is a required field'),
            country: Yup.string().required('Coutry is a required field'),
            city: Yup.string().required('City is a required field'),
            postalCode: Yup.string().required(
              'Postal Code is a required field',
            ),
            address: Yup.string().required('Address is a required field'),
            complement: Yup.string(),
            language: Yup.string().required('Language is a required field'),
            mandatoryLanguage: Yup.boolean(),
            serviceDescription: Yup.string(),
            urgentService: Yup.string(),
            contactPlatform: Yup.boolean(),
          })}
        >
          {({
            values,
            handleChange,
            setFieldTouched,
            touched,
            errors,
            handleSubmit,
          }) => (
            <>
              <LineContainer>
                <InputText
                  label="First Name"
                  className={classes.inputFirstName}
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  onBlur={() => setFieldTouched('firstName')}
                  error={!!(errors.firstName && touched.firstName)}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : ''
                  }
                />
                <InputText
                  label="Last Name"
                  className={classes.inputLastName}
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  onBlur={() => setFieldTouched('lastName')}
                  error={!!(errors.lastName && touched.lastName)}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : ''
                  }
                />
              </LineContainer>
              <LineContainer>
                <InputMask
                  mask="+999 999 999 999"
                  value={values.phone}
                  onChange={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                >
                  <InputText
                    label="Phone"
                    className={classes.inputPhone}
                    error={!!(errors.phone && touched.phone)}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ''
                    }
                  />
                </InputMask>
                <InputText
                  label="Email"
                  className={classes.inputEmail}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  error={!!(errors.email && touched.email)}
                  helperText={errors.email && touched.email ? errors.email : ''}
                />
              </LineContainer>
              <LineContainer>
                <InputText
                  label="Address"
                  className={classes.inputAddress}
                  value={values.address}
                  onChange={({ nativeEvent }) => {
                    handleGoogleAutoComplete(nativeEvent);
                  }}
                  onBlur={() => setFieldTouched('address')}
                  error={!!(errors.address && touched.address)}
                  helperText={
                    errors.address && touched.address ? errors.address : ''
                  }
                />
                <InputText
                  label="Country"
                  className={classes.inputCountry}
                  value={values.country}
                  onChange={handleChange('country')}
                  onBlur={() => setFieldTouched('country')}
                  error={!!(errors.country && touched.country)}
                  helperText={
                    errors.country && touched.country ? errors.country : ''
                  }
                />
              </LineContainer>
              <LineContainer>
                <SelectContainer className={classes.inputCity}>
                  <SelectLabel id="select-city">City</SelectLabel>
                  <InputSelect
                    labelId="select-city"
                    id="demo-simple-select-outlined"
                    label="city"
                    value={values.city}
                    onChange={handleChange('city')}
                    onBlur={() => setFieldTouched('city')}
                    error={!!(errors.city && touched.city)}
                  >
                    <SelectOption value="">None</SelectOption>
                    <SelectOption value="Lisboa">Lisboa</SelectOption>
                    <SelectOption value="Porto">Porto</SelectOption>
                    <SelectOption value="Portalegre">Portalegre</SelectOption>
                    <SelectOption value="Viseu">Viseu</SelectOption>
                  </InputSelect>
                  <SelectError style={{ color: theme.color.red }}>
                    {errors.city && touched.city ? errors.city : ''}
                  </SelectError>
                </SelectContainer>
                <InputText
                  label="Postal Code"
                  className={classes.inputPostalCode}
                  value={values.postalCode}
                  onChange={handleChange('postalCode')}
                  onBlur={() => setFieldTouched('postalCode')}
                  error={!!(errors.postalCode && touched.postalCode)}
                  helperText={
                    errors.postalCode && touched.postalCode
                      ? errors.postalCode
                      : ''
                  }
                />
              </LineContainer>
              <LineContainer>
                <InputText
                  label="Complement"
                  className={classes.inputComplement}
                  value={values.complement}
                  onChange={handleChange('complement')}
                  onBlur={() => setFieldTouched('complement')}
                  error={!!(errors.complement && touched.complement)}
                  helperText={
                    errors.complement && touched.complement
                      ? errors.complement
                      : ''
                  }
                />
                <SelectContainer className={classes.inputLanguage}>
                  <SelectLabel id="select-language">Language</SelectLabel>
                  <InputSelect
                    labelId="select-language"
                    id="demo-simple-select-outlined"
                    label="Language"
                    value={values.language}
                    onChange={handleChange('language')}
                    onBlur={() => setFieldTouched('language')}
                    error={!!(errors.language && touched.language)}
                  >
                    <SelectOption value="">None</SelectOption>
                    <SelectOption value="Ingles">Ingles</SelectOption>
                    <SelectOption value="Alemao">Alemao</SelectOption>
                    <SelectOption value="Espanhol">Espanhol</SelectOption>
                    <SelectOption value="Portugues">Portugues</SelectOption>
                  </InputSelect>
                  <SelectError style={{ color: theme.color.red }}>
                    {errors.language && touched.language ? errors.language : ''}
                  </SelectError>
                </SelectContainer>
                <CheckboxContainer
                  className={classes.inputMandatoryLanguage}
                  control={<InputCheckbox color="primary" />}
                  label="Mandatory Language"
                  onChange={handleChange('mandatoryLanguage')}
                  value={values.mandatoryLanguage}
                />
              </LineContainer>
              <InputTextArea
                label="Service Description"
                multiline
                rows={4}
                fullWidth
                className={classes.inputServiceDescription}
                value={values.serviceDescription}
                onChange={handleChange('serviceDescription')}
                onBlur={() => setFieldTouched('serviceDescription')}
                error={
                  !!(errors.serviceDescription && touched.serviceDescription)
                }
                helperText={
                  errors.serviceDescription && touched.serviceDescription
                    ? errors.serviceDescription
                    : ''
                }
              />
              <RadioContainer>
                <RadioLabel>Is a urgent service ?</RadioLabel>
                <InputRadio
                  row
                  onChange={handleChange('urgentService')}
                  value={values.urgentService}
                >
                  <RadioOption
                    label="Yes"
                    control={<CardRadio color="primary" />}
                    value="yes"
                  />
                  <RadioOption
                    label="No"
                    control={<CardRadio color="primary" />}
                    value="no"
                  />
                </InputRadio>
              </RadioContainer>
              <PlatformChooseContainer>
                <LabelForm>Platform where you prefer to be contacted</LabelForm>
                <PlatformOptions>
                  <PlatfomOption
                    icon={<FaWhatsapp />}
                    color={theme.color.whatsapp}
                    handleClick={() => handleSetPlatform('whatsapp')}
                  />
                  <PlatfomOption
                    icon={<FaTelegramPlane />}
                    color={theme.color.telegram}
                    handleClick={() => handleSetPlatform('telegram')}
                  />
                  <PlatfomOption
                    icon={<RiMessengerLine />}
                    color={theme.color.messenger}
                    handleClick={() => handleSetPlatform('messenger')}
                  />
                </PlatformOptions>
                <PlatformDescription>
                  *The chosen platform will be where our professional will
                  contact you in order to start the conversation
                </PlatformDescription>
              </PlatformChooseContainer>
              <ButtonRequest
                className={classes.buttonRequest}
                onClick={() => handleSubmit()}
              >
                <TextRequest>Request your quotes</TextRequest>
              </ButtonRequest>
            </>
          )}
        </Formik>
      </ThemeProvider>
    </FormContainer>
  );
};

export default RequestServiceForm;
