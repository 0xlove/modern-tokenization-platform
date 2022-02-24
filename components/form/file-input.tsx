import {useField} from 'formik';
import React from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import GooglePicker from 'react-google-picker';
import styled from 'styled-components';

import {Chip, ChipGroup} from './chip';
import {Label} from './label';
import {CommonInputProps} from './types';

interface FileInputProps extends CommonInputProps {
  // no special props
}

interface DropboxFile {
  name: string;
  link: string;
}

interface GoogleDriveFile {
  action: 'picked' | 'error';
  docs: {
    name: string;
    url: string;
  }[];
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  required,
}) => {
  const [field, , helpers] = useField(name);
  const value: File | null = field.value;
  const {setValue} = helpers;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);
  const id = React.useMemo(() => `input-${name}`, [name]);

  const handleAttach = React.useCallback(() => {
    inputRef.current?.click();
  }, []);

  // paste isn't a widely supported feature
  const handlePaste = React.useCallback(() => {
    return (navigator.clipboard as any).read().then((data: any) => {
      const content = data[0];

      return content.getType('image/png');
    }).then((file: any) => {
      setValue(file);
    });
  }, [setValue]);

  const handleCancel = React.useCallback(() => {
    setValue(null);
  }, [setValue]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files?.[0] ?? null);
    },
    [setValue],
  );

  const handleDropboxPick = React.useCallback((files: DropboxFile[]) => {
    const [file] = files;

    setValue({
      name: file.name,
      url: file.link,
    });
  }, [setValue]);

  const [googleToken, setGoogleToken] = React.useState<string | null>(null);

  const handleGoogleDrivePick = React.useCallback((event: GoogleDriveFile) => {
    if (event.action === 'picked') {
      const [doc] = event.docs;

      setValue({
        name: doc.name,
        url: doc.url,
        token: googleToken,
      });
    }
  }, [googleToken, setValue]);

  return (
    <Root>
      <Label htmlFor={id} required={required}>{label}</Label>
      <HiddenInput
        ref={inputRef}
        type="file"
        id={id}
        name={name}
        value=""
        onChange={handleChange}
      />
      <HiddenInput value={value ? 'filled' : ''} required={required} />
      {value ? (
        <FileInfo>
          <FileName>{value.name}</FileName>
          <Chip type="button" onClick={handleCancel}>Cancel</Chip>
        </FileInfo>
      ) : (
        <ChipGroup>
          <div>
            <Chip type="button" onClick={handleAttach}>Attach</Chip>
          </div>
          <DropboxChooser
            appKey={process.env.NEXT_PUBLIC_DROPBOX_APP_KEY}
            success={handleDropboxPick}
            multiselect={false}
            extensions={['.pdf']}
            linkType="direct"
          >
            <Chip type="button">Dropbox</Chip>
          </DropboxChooser>
          <GooglePicker
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            developerKey={process.env.NEXT_PUBLIC_GOOGLE_DEVELOPER_KEY}
            scope={['https://www.googleapis.com/auth/drive.readonly']}
            onChange={handleGoogleDrivePick}
            onAuthenticate={setGoogleToken}
            multiselect={false}
            navHidden={true}
            authImmediate={false}
            mimeTypes={['application/pdf']}
            query={'.pdf'}
            viewId={'DOCS'}
          >
            <Chip type="button">Google drive</Chip>
          </GooglePicker>
          {/* <Chip type="button" onClick={handlePaste}>Paste</Chip> */}
        </ChipGroup>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const HiddenInput = styled.input`
  display: block;
  width: 1px;
  height: 1px;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0);
  outline: none;
  position: absolute;
  left: 0;
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
`;

const FileName = styled.div`
  font-size: 1.5rem;
`;
