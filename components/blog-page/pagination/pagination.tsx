import styled, {css} from 'styled-components';
import {DOTS, usePagination} from './usePagiantion';
import {useRouter} from 'next/router';

export interface PaginationProps {
  onPageChange?: (current: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount: number,
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  pageSize,
  siblingCount,
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
        disabled={currentPage === 1} 
        onClick={onPrevious}
      >
        previous
      </Button>
      {
        paginationRange && paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <Number>
              {DOTS}
            </Number>;
          }

          return (
            <Number 
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => router.push({
                pathname: router.pathname,
                query: `page=${pageNumber}`
              }, undefined, {scroll: false})}
            >
              {pageNumber}
            </Number>
          );
        })
      }
      <Button 
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        next
      </Button>
    </Root>
  );
};

export default Pagination;

const Root = styled.div`
  display: flex;
  font-size: 18px;
  background-color:  #302D41;
  border-radius: 35px;
  overflow: hidden;
  width: max-content;
  height: 65px;
  cursor: pointer;
  font-weight: 600;
  
`;

const Button = styled.button`
  cursor: pointer;
  color: #4E60F4;
  text-transform: uppercase;
  width: 156px;
  background-color: #302D41;
  font-size: 18px;
  font-weight: 600;
  border: none;
  &:disabled {
    opacity: 0.2;
  }
`;

interface NumberProps {
  active?: boolean;
}

const Number = styled.div<NumberProps>`
  display: grid;
  place-items: center;
  color: ${({active}) => active ? '#302D41' : '#fff'};
  background-color: ${({active}) => active ? '#4E60F4' : '#302D41'};
  width: 65px;
  
  border-left: 1px solid #000;
  border-right: 1px solid #000;

  transition: all 300ms ease-in-out;

  ${props => props.active && css`
    transform: scale(1.02);     
    border-left: 1px solid #4E60F4;
    border-right: 1px solid #4E60F4;
  `}
`;
