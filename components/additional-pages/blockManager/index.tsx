import {GetBlock} from './interface';
import * as Components from '../strapi';

const getBlockComponent = ({__component, ...rest}: GetBlock, index: number) => {
  let Block;
  
  switch(__component) {
    
  case 'additional-page-components.description':
    Block = Components.Description;
    break;
  case 'additional-page-components.main-headline':
    Block = Components.MainHeadline; 
    break;
  case 'additional-page-components.second-headline-with-image':
    Block = Components.SecondHeadlineImage;
    break;
  case 'additional-page-components.second-headline':
    Block = Components.SecondHeadline;
    break;
  case 'additional-page-components.split-headline':
    Block = Components.SpitHeadline;
    break;
  }

  return Block ? <Block key={`index-${index}`} {...rest}/> : null; 
};

const componentsManager = (components = []): JSX.Element => {
  
  return <>{components.map(getBlockComponent)}</>;
};

export default componentsManager;

