import React, { useMemo } from 'react';
import useWindow from '../../hooks/useWindow';
import { PC_MIN_WIDTH } from '../../constants/platform';
import CheckIcon from '@site/static/icons/check.svg';

import './index.scss';
import Translate from '@docusaurus/Translate';

export default function Pricing() {
  const { screenWidth } = useWindow();
  const isPc = useMemo(() => screenWidth > PC_MIN_WIDTH, [screenWidth]);

  const StandarWorkServiceItem = {
    key: 'work order service',
    label: <Translate>work order service</Translate>
  };

  const standardArr = [
    {
      key: 'Application management',
      label: <Translate>Application management</Translate>
    },
    {
      key: 'Highly available database',
      label: <Translate>Highly available database</Translate>
    },
    {
      key: 'application market',
      label: <Translate>application market</Translate>
    },
    {
      key: 'multi-tenant',
      label: <Translate>multi-tenant</Translate>
    },
    {
      key: 'Metering/Quotas',
      label: <Translate>Metering/Quotas</Translate>
    }
  ];

  const CompanyArr = [
    {
      key: 'Privatization/offline deployment',
      label: <Translate>Privatization/offline deployment</Translate>
    },
    {
      key: 'Work order/instant messaging service',
      label: <Translate>Work order/instant messaging service</Translate>
    },
    {
      key: 'work order service',
      label: <Translate>Monday to Friday, response within 8 hours</Translate>
    },
    ...standardArr
  ];

  const CustomEditionArr = [
    {
      key: 'Work orders/instant messaging/expert docking/on-site support',
      label: <Translate>Work orders/instant messaging/expert docking/on-site support</Translate>
    },
    {
      key: 'Monday to Sunday, response within 24 hours',
      label: <Translate>Monday to Sunday, response within 24 hours</Translate>
    },
    ...standardArr
  ];

  return (
    <div>
      <div className="sealos-price-container-box">
        <div className="sealos-price-type-box">
          <h2 className="sealos-price-title color1">标准版</h2>
          <div className="price-container">
            <div className="price">¥0</div>
            <div className="gift">赠 ¥299</div>
          </div>
          <p className="description">适合开发者测试，或 POC demo</p>

          <div className="sealos-price-service-item">
            <CheckIcon />
            <span>{StandarWorkServiceItem.label}</span>
          </div>
          {standardArr.map((item) => {
            return (
              <div className="sealos-price-service-item" key={item.key}>
                <CheckIcon />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="sealos-price-type-box">
          <h2 className="sealos-price-title color2">企业版</h2>
          <div className="price-container">
            <div className="price">¥599</div>
            <div className="gift">赠 ¥599</div>
          </div>
          <div className="description">适合企业生产环境</div>
          {CompanyArr.map((item) => {
            return (
              <div className="sealos-price-service-item" key={item.key}>
                <CheckIcon />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="sealos-price-type-box">
          <h2 className="sealos-price-title color3">定制版</h2>
          <p className="description">适合大规模集群与大型企业客户</p>
          <div className="div-4">
            <a href="#" className="link">
              联系我们
            </a>
          </div>

          {CustomEditionArr.map((item) => {
            return (
              <div className="sealos-price-service-item" key={item.key}>
                <CheckIcon />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <h1 className="text-2xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
