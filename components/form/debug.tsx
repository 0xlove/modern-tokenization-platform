import {useFormikContext} from 'formik';
import React from 'react';

export const Debug: React.FC = () => {
  const context = useFormikContext();

  // eslint-disable-next-line no-console
  console.log(context);

  return null;
};
