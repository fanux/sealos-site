import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import GithubIcon from '@site/static/icons/github-light.svg'
import MeunIcon from '@site/static/icons/meun.svg'
import LogoIcon from '@site/static/icons/sealos.svg'
import React, { useEffect, useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import './index.scss'

const navbar = [
  {
    key: 'docs',
    label: <Translate>Docs</Translate>,
    to: '/docs/Intro',
  },
  {
    key: 'community',
    label: 'Community',
    to: 'https://forum.laf.run/',
  },
  {
    key: 'contact',
    label: <Translate>Contact</Translate>,
    to: 'https://www.wenjuan.com/s/UZBZJv9ToJ/#',
  },
]

const HomeHeader = ({ isPc }: { isPc: boolean }) => {
  const [stars, setStars] = useState(10000)

  // const i18nMap: { [key: string]: { label: string; link: string } } = {
  //   en: { label: '中', link: '/zh-Hans/' },
  //   ['zh-Hans']: { label: 'En', link: '/' },
  // }

  // const {
  //   i18n: { currentLocale },
  //   siteConfig: {
  //     themeConfig: {
  //       // @ts-ignore nextLine
  //       navbar: { items: navbarData },
  //     },
  //   },
  // } = useDocusaurusContext()

  useEffect(() => {
    ;(async () => {
      const { stargazers_count } = await (
        await fetch('https://api.github.com/repos/labring/sealos')
      ).json()
      setStars(stargazers_count)
    })()
  }, [])

  const openSideBar = () => {
    const NavbarButton: HTMLBaseElement =
      document.querySelector('.navbar__toggle')
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    NavbarButton.dispatchEvent(event)
  }

  if (!isPc) {
    return (
      <div id="Start" className="home-header">
        <img
          draggable="false"
          className="header-img"
          src={require('@site/static/illustrations/bg-header.png').default}
          alt="community"
        />
        <nav>
          <div className="left">
            <MeunIcon
              width={'24px'}
              height={'24px'}
              onClick={() => openSideBar()}
            />
            <LogoIcon width={'42px'} height={'42px'} />
            <span className="sealos-title">Sealos</span>
          </div>
          <div className="right">
            <Link className="git-icon" to="https://github.com/labring/sealos">
              <GithubIcon width={'20px'} height={'20px'} color="#fff" />
              <span className="git-stars">{(stars / 1000).toFixed(1)}k</span>
            </Link>
          </div>
        </nav>
        <main>
          <h1>
            <span className="txt-title">kubernetes&nbsp;</span>
            <span className="txt-aid">as the kernel</span>
          </h1>
          <h2>Cloud Operating System</h2>
          <h3>
            Abstracting the entire data center as a single server, everything
            becomes an application, and using it is like using a &nbsp;
            <span className="txt-title">personal computer.</span>
          </h3>
          <a
            className="start-now-button"
            href="https://cloud.sealos.io"
            target="_blank">
            Start Now
            <div className="start-now-button-wrap"></div>
          </a>
          <VideoPlayer
            url={
              'https://itceb8-video.oss.laf.run/sealos-website.mp4'
            }></VideoPlayer>
        </main>
      </div>
    )
  }

  return (
    <div id="Start" className="home-header">
      <img
        draggable="false"
        unselectable="on"
        className="header-img"
        src={require('@site/static/illustrations/bg-header.png').default}
        alt="community"
      />
      <nav>
        <div className="left">
          <LogoIcon width={'42px'} height={'42px'} />
          <span className="sealos-title">Sealos</span>
          <div className="links">
            {navbar.map((item) => (
              <Link key={item.key} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="right">
          {/* {isBrowser ? (
            <div className="right">
              <Link
                to={`${location.origin}${i18nMap[currentLocale]?.link}`}
                target="_self">
                {i18nMap[currentLocale]?.label}
              </Link>
            </div>
          ) : (
            <div className="right">中</div>
          )} */}
          <Link className="git-icon" to="https://github.com/labring/sealos">
            <GithubIcon width={'20px'} height={'20px'} color="#fff" />
            <span className="git-stars">{(stars / 1000).toFixed(1)}k</span>
          </Link>
          <a
            className="start-now-button"
            href="https://cloud.sealos.io"
            target="_blank">
            Start Now
            <div className="start-now-button-wrap"></div>
          </a>
        </div>
      </nav>
      <main>
        <h1>
          <span className="txt-title">kubernetes&nbsp;</span>
          <span className="txt-aid">as the kernel</span>
        </h1>
        <h2>Cloud Operating System</h2>
        <h3>
          Abstracting the entire data center as a single server, everything
          becomes an application, and using it is like using a &nbsp;
          <span className="txt-title">personal computer.</span>
        </h3>
        <VideoPlayer
          url={
            'https://itceb8-video.oss.laf.run/sealos-website.mp4'
          }></VideoPlayer>
      </main>
    </div>
  )
}

export default React.memo(HomeHeader)
