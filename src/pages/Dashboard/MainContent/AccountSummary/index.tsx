import React, { useState } from 'react';

import { ResponsiveLine } from '@nivo/line';
import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import lineChartData from '../../../../utils/line-chart-data';
import { i18n } from '../../../../translate/i18n';
import {
  Container,
  Card,
  Header,
  DataWrapper,
  LeftData,
  RightData,
  DataValue,
  CustomTooltip,
} from './styles';
import Button from '../../../../components/Button';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';
import { PlataformaPaiIcon } from '../../../../assets/images/icons';

type ChartValue = number | React.ReactText | undefined;

const formatChartValue = (value: ChartValue): string => `${value || 0}%`;

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);
  const [investmentGrowth, setInvestmentGrowth] = useState(() => {
    const [investments] = lineChartData;
    const { y } = investments.data[investments.data.length - 1];
    return formatChartValue(y);
  });

  const { colors } = useTheme();

  return (
    <Container>
      <Card>
        <Header iconStroke>
          <FiFileText />
          <h3>{i18n.t('account.extract')}</h3>
          <Button
            onClick={() => setDisplayStatement((prevState) => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>
            {' '}
            <ResponsiveLine
              data={lineChartData}
              useMesh
              enableArea
              enableCrosshair={false}
              curve="cardinal"
              margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              tooltip={({ point }) => {
                return (
                  <CustomTooltip>
                    {formatChartValue(point.data.yFormatted)}
                  </CustomTooltip>
                );
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              axisLeft={null}
              colors={colors.success}
              lineWidth={1.5}
              pointSize={8}
              pointColor={colors.success}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableGridY={false}
            />
          </LeftData>
          <RightData>
            <span>{i18n.t('account.revenue')}</span>
            <DataValue income>
              {displayStatement ? 'R$ 8.552,22' : '---'}
            </DataValue>
            <span>{i18n.t('account.expenses')}</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 7.948,55' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>

        <DataWrapper>
          <LeftData>
            <img
              src={CreditCardIllustration}
              alt="Cartão de Crédito Sem Anuidade"
            />
          </LeftData>
          <RightData>
            <span>{i18n.t('branding.noAnnuity')}</span>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments((prevState) => !prevState)}
            variant="transparent"
          >
            {displayInvestments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>
            {' '}
            <ResponsiveLine
              data={lineChartData}
              useMesh
              enableArea
              enableCrosshair={false}
              curve="cardinal"
              margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              tooltip={({ point }) => {
                return (
                  <CustomTooltip>
                    {formatChartValue(point.data.yFormatted)}
                  </CustomTooltip>
                );
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              axisLeft={null}
              colors={colors.success}
              lineWidth={1.5}
              pointSize={8}
              pointColor={colors.success}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableGridY={false}
            />
          </LeftData>
          <RightData>
            <span>{i18n.t('investments.investedCapital')}</span>
            <DataValue>{displayInvestments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>{i18n.t('investments.monthPerfomance')}</span>
            <DataValue>
              {displayInvestments ? investmentGrowth : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
