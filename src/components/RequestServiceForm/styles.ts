import styled from 'styled-components';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Form } from 'formik';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  inputFirstName: {
    width: '49%',
  },
  inputLastName: {
    width: '49%',
  },
  inputPhone: {
    width: '40%',
  },
  inputEmail: {
    width: '58%',
  },
  inputCountry: {
    width: '35%',
  },
  inputLanguage: {
    width: '36%',
  },
  inputMandatoryLanguage: {
    width: '20%',
    justifyContent: 'flex-end',
    marginRight: 0,
  },
  inputCity: {
    width: '49%',
  },
  inputPostalCode: {
    width: '49%',
  },
  inputAddress: {
    width: '63%',
  },
  inputComplement: {
    width: '38%',
  },
  inputServiceDescription: {
    marginBottom: 20,
  },
  buttonRequest: {
    marginTop: 20,
  },
}));

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled(TextField).attrs({
  id: 'outlined-basic',
  variant: 'outlined',
})`
  height: 50px;
`;

export const InputTextArea = styled(TextField).attrs({
  id: 'outlined-multiline-static',
  variant: 'outlined',
})``;

export const SelectContainer = styled(FormControl).attrs({
  variant: 'outlined',
})`
  height: 50px;
`;

export const SelectLabel = styled(InputLabel).attrs({})``;

export const InputSelect = styled(Select).attrs({})``;

export const SelectOption = styled(MenuItem)``;

export const SelectError = styled(FormHelperText)``;

export const CheckboxContainer = styled(FormControlLabel)`
  color: ${theme.color.highGrey};
  margin: 0;
`;

export const InputCheckbox = styled(Checkbox)``;

export const RadioContainer = styled(FormControl).attrs({
  variant: 'outlined',
  component: 'fieldset',
})``;

export const RadioLabel = styled(FormLabel).attrs({
  component: 'legend',
})``;

export const InputRadio = styled(RadioGroup)``;

export const CardRadio = styled(Radio)``;

export const RadioOption = styled(FormControlLabel)``;

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ButtonRequest = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  height: 40px;
  width: 50%;
`;

export const TextRequest = styled.span``;

export const LabelForm = styled(FormLabel)``;

export const PlatformChooseContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const PlatformOptions = styled.div`
  width: 30%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const PlatformDescription = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: ${theme.color.mediumGrey};
`;
