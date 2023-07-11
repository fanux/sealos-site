import DeveloperIcon from '@site/static/icons/developer.svg'
import DiscordIcon from '@site/static/icons/discord.svg'
import GithubIcon from '@site/static/icons/github-light.svg'
import React, { useLayoutEffect } from 'react'
import CometIcon from '../Comet'
import Link from '@docusaurus/Link'
import useIsBrowser from '@docusaurus/useIsBrowser'
import './index.scss'

const Community = ({ isPc }: { isPc: boolean }) => {
  const isBrowser = useIsBrowser()

  useLayoutEffect(() => {
    // @ts-ignore nextline
    if (isBrowser && isPc && WOW) {
      // @ts-ignore nextline
      new WOW({
        boxClass: 'animate__fadeIn',
        animateClass: 'animate__fadeIn',
        offset: 0,
        mobile: false,
        live: false,
      }).init()
    }
  }, [isBrowser])

  const FooterLinks = [
    {
      key: 'GitHub',
      label: <GithubIcon width={20} height={20} />,
      to: 'https://github.com/labring/sealos',
    },
    {
      key: 'Discord Community',
      label: <DiscordIcon width={20} height={20} />,
      to: 'https://discord.com/invite/qzBmGGZGk7',
    },
    {
      key: 'Developer Community',
      label: <DeveloperIcon width={20} height={20} />,
      to: 'https://forum.laf.run/',
    },
  ]

  if (!isPc) {
    return (
      <div className="community">
        <div className="comet-icon">
          <CometIcon />
        </div>
        <div className={'community-title'}>Join Us</div>

        <div className="community-box">
          <div className="join">Join the Sealos Community</div>
          <span className="text">
            Experience the latest version of Sealos for the first time and
            communicate with developers and users in Discord or WeChat groups.
          </span>

          <div className="link">
            {FooterLinks.map((item) => {
              return (
                <Link key={item.key} className="community-logo" to={item.to}>
                  {item.label}
                </Link>
              )
            })}
          </div>
          <img
            draggable="false"
            className="community-phone-logo"
            src={
              require('@site/static/illustrations/community-phone.png').default
            }
            alt="community"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="community">
      <div className="comet-icon">
        <CometIcon />
      </div>
      <div className={'community-title'}>Join Us</div>
      <div className="community-box-wrap">
        <div className="community-box animate__fadeIn" data-wow-duration="1s">
          <div className="community-left">
            <div className="join">Join the Sealos Community</div>
            <div className="text">
              Experience the latest version of Sealos for the first time and
              communicate with developers and users in Discord or WeChat groups.
            </div>
            <div className="link">
              {FooterLinks.map((item) => {
                return (
                  <Link
                    aria-controls={item.key}
                    key={item.key}
                    className="community-logo cell poptip--bottom"
                    to={item.to}>
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <img
            draggable="false"
            height={'340px'}
            className="community-right"
            src={require('@site/static/illustrations/community.png').default}
            alt="community"
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Community)
