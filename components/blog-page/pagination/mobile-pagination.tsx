import {useRouter} from 'next/router';
import styled, {css} from 'styled-components';
import {PaginationProps} from './pagination';
import {usePagination} from './usePagiantion';

import arrow from '@/images/arrov.png';

const MobilePagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  siblingCount,
  pageSize,
}) => {
  const router = useRouter();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const onNext = () => {
    router.push({
      pathname: router.pathname,
      query: `page=${currentPage + 1}`
    }, undefined, {scroll: false});
  };

  const onPrevious = () => {
    router.push({
      pathname: router.pathname,
      query: `page=${currentPage - 1}`
    }, undefined, {scroll: false});
  };

  const lastPage = paginationRange 
  && paginationRange[paginationRange.length - 1];

  return ( 
    <Root>
      <Button 
        left 
        onClick={onPrevious}
        disabled={currentPage === 1}
      />
      <Numbers>
        {currentPage}/{lastPage}
      </Numbers>
      <Button onClick={onNext} disabled={currentPage === lastPage}/>
    </Root>
  );
};

export default MobilePagination;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ButtonProps {
  left?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: 25px;
  height: 25px;
  background-image: url(${arrow.src});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  border: unset;
  justify-self: center;

  ${props => props.left && css`
    transform: rotate(180deg);
  `}

  &:disabled {
    opacity: 0.2;
  }
`;

const Numbers = styled.div`
  padding: 13px 33px;
  width: 100px;
  border-radius: 100px;
  display: grid;
  place-items: center;
  background-color: #22202F;
  color: #4E60F4;
  font-size: 24px;
`;
