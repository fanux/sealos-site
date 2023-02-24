import React, { useMemo, useRef } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Link from "@docusaurus/Link";
import GithubIcon from "@site/static/icons/github-navbar.svg"
import LogoIcon from "@site/static/icons/logo.svg"
import Translate from '@docusaurus/Translate';
import MyButton from '@site/src/components/Button';

import "./index.scss"

const HomeHeader = () => {
  const FeatureList = useRef([
    {
      title: <Translate description="homepage simple">Simple</Translate>,
      Svg: "illustrations/Start1.png",
      description: (
        <Translate description="homepage simple">
          Any highly available distributed application on Kubernetes can be
          easily installed with just one click.
        </Translate>
      ),
    },
    {
      title: <Translate description="homepage flexible">Flexible</Translate>,
      Svg: "illustrations/Start2.png",
      description: (
        <Translate description="homepage flexible intro">
          Freely combine various distributed applications and easily customize the
          cloud you need.
        </Translate>
      ),
    },
    {
      title: <Translate description="homepage powerful">Powerful</Translate>,
      Svg: "illustrations/Start3.png",
      description: (
        <Translate description="homepage flexible intro">
          Cloud services can be found and obtained in the application market,
          simple but powerful.
        </Translate>
      ),
    },
  ])
  
  const i18nMap:{[key: string]: {label: string, link: string}} = {
    en: {label: '中', link: '/zh-Hans/'},
    ['zh-Hans']: {label: 'En', link: '/'}
  }

  // @ts-ignore nextLine
  const { i18n: { currentLocale }, siteConfig: {themeConfig: {navbar: {items: navbarData}}} } = useDocusaurusContext()
  const navbarList:{label: string, link: string}[] = useMemo(() => navbarData.filter(item => item.to).map(item => ({
    label: item.label,
    link: item.to
  })),[navbarData])

  const isBrowser = useIsBrowser();

  return (
    <div id='Start' className='home-header'>
      {/* 背景光源 */}
      <div className="bg-light">
        <div className="light1"></div>
        <div className="light2"></div>
        <div className="light3"></div>
      </div>
      <img className='background-img' src="illustrations/start.png" alt="" />
      {/* 自定义navbar */}
      <nav>
        <div className='left'>
          <LogoIcon/>
          <span>sealos</span>
        </div>
        <div className="links">
          {navbarList.map(item => (
            <Link key={item.link} to={item.link}>{item.label}</Link>
          ))}
        </div>
        <div className="right">
          {
            isBrowser ? (
              <div className="right">
                <Link to={`${location.origin}${i18nMap[currentLocale]?.link}`} target="_self">{i18nMap[currentLocale]?.label}</Link>
              </div>
            ) : (
              /* 不能跳转的 */
              <div className="right"> 
                中
              </div>
            )
          }
          <Link className="git-icon" to="https://github.com/labring/sealos"><GithubIcon /></Link>
        </div>
      </nav>
      <main>
        <h1><Translate>Run Your Business on Sealos Cloud</Translate></h1>
        <p><Translate>Sealos is a Kubernetes distribution, a general-purpose cloud operating system for managing cloud-native applications.</Translate></p>
        <MyButton link='https://cloud.sealos.io'>
          <Translate>START NOW</Translate>
        </MyButton>
      </main>
      {/* 内容 */}
      <footer className="row padding-top--lg">
        {FeatureList.current.map((item, i) => (
          <div key={i} className="col col-demo row">
            <div className="col col--3">
              <img src={item.Svg} alt="" />
            </div>
            <div className="col col--9">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </footer>
    </div>
  )
}

export default React.memo(HomeHeader)