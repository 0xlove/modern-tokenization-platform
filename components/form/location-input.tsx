import {useField} from 'formik';
import React from 'react';
import {Chip} from './chip';
import {TextInput, TextInputProps} from './text-input';

export interface LocationInputProps extends TextInputProps {
  locateLabel: React.ReactNode;
}

export const LocationInput: React.FC<LocationInputProps> = props => {
  const [isLocating, setLocating] = React.useState(false);
  const [, , helpers] = useField(props.name);
  const {setValue} = helpers;

  const handleLocateMe = React.useCallback(() => {
    setLocating(true);

    fetch('https://geolocation-db.com/json/').then(res => res.json()).then(({city}) => {
      setValue(city);
    }).finally(() => {
      setLocating(false);
    });
  }, [setValue]);

  return (
    <TextInput
      {...props}
      endAdornment={
        <Chip
          onClick={handleLocateMe}
          disabled={isLocating}
        >
          {props.locateLabel}
        </Chip>
      }
    />
  );
};
