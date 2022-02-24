/* eslint-disable max-len */
import {useRouter} from 'next/dist/client/router';
import Select from 'react-select';
import styled from 'styled-components';

const SSelect = styled(Select)`
  margin: 0 10px;
`;

const LanguageSelect = (): JSX.Element => {

  const router = useRouter();
  
  const option = router.locales?.map(el => {
    return {
      value: el,
      label: el,
    };
  });

  const onChange = (e: any) => {
    const targetLang = e.value;

    const {asPath} = router;
    router.push(asPath, asPath, {
      locale: targetLang,
    });
  };

  return <SSelect
    onChange={onChange}
    options={option}
    isSearchable={false}
    defaultValue={option?.find(el => el.value === router.locale)}
    styles={customStyles}
  />;
};

export default LanguageSelect;
  
const customStyles = {
  option: (provided: any, state: { isSelected: any; }) => ({
    color: state.isSelected ? 'blue' : '#fff',
    backgroundColor: '#22202F',
    width: 'max-content',
    padding: 20,
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    zIndex: 100,
    fontWeight: 600,
    textTransform: 'capitalize' as 'capitalize'
  }),
  control: () => ({
    position: 'relative' as 'relative',
    cursor: 'pointer',
    width: 104,
    height: 60,
    backgroundColor: '#22202F',
    borderRadius: 100,
    fontSize: 'clamp(1rem, 1.250vw, 1.25rem)',
    fontWeight: 600,
    textTransform: 'capitalize' as 'capitalize'
  }),
  menu: () => ({
    position: 'absolute' as 'absolute',
    top: 0,
    backgroundColor: '#22202F',
    fontSize: 'clamp(1rem, 1.250vw, 1.25rem)',
    zIndex: 100,
    borderRadius: 24,
    width: 104,
    display: 'grid',
    placeItems: 'center'
  }),
  menuList: () => ({
  }),
  dropdownIndicator:  () => ({
    display: 'none',
  }),
  singleValue: () => ({
    position: 'absolute' as 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    top: '50%'
  }),
  valueContainer: () => ({
  }),
  indicatorsContainer: () => ({
    display: 'none'
  }),
};
