import format from 'date-fns/format';
import React from 'react';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import AutoSizer from 'react-virtualized-auto-sizer';
import styled from 'styled-components';

const tickFormatter = (date: string) => format(new Date(date), 'LLL');

interface ChartProps {
  data: {
    date: string;
    value: number;
  }[];
}

const Chart: React.FC<ChartProps> = ({data}) => {
  
  return (
    <Root>
      <AutoSizer>
        {({width, height}) => (
          <AreaChart width={width} height={height} data={data}>
            <defs>
              <linearGradient
                id="g1"
                gradientUnits="userSpaceOnUse"
                x1='13.61%' y1='-8.47%' x2='86.39%' y2='108.47%'
              >
                <stop offset='.175' stopColor='#705FEE'/>
                <stop offset='.848' stopColor='#c95cdd' stopOpacity='0'/>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tickFormatter={tickFormatter}
              axisLine={false}
              tickLine={false}
              tickMargin={14}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={14} />
            <CartesianGrid
              id="chart-grid"
              fill="#3E3C4C"
              stroke="#4A4859"
              strokeWidth="3"
              vertical={false}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#C95CDD"
              fill="url(#g1)"
            />
          </AreaChart>
        )}
      </AutoSizer>
    </Root>
  );
};

export default Chart;

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #A9A2CB;

  .recharts-cartesian-grid-bg,
  #animationClipPath-recharts-area-6 rect {
    rx: 8;
  }

  .recharts-cartesian-grid-horizontal {
    line:first-child,
    line:last-child {
      display: none;
    }
  }
`;
