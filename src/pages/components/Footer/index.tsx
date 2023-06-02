import React, { useMemo } from 'react'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { copyData } from '@site/src/utils';
import './index.scss'
import TwitterIcon from "@site/static/icons/twitter.svg"
import GithubIcon from "@site/static/icons/github.svg"
import DiscordIcon from "@site/static/icons/discord.svg"
import PhoneIcon from "@site/static/icons/phone.svg"
import EmailIcon from "@site/static/icons/email.svg"

interface ItemType {
  title: string
  items: {label: string, to: string}[]
}

const Footer = () => {
  // @ts-ignore nextline
  const { siteConfig: {themeConfig: { footer: { links } } }} = useDocusaurusContext()
  const listData = useMemo<ItemType[]>(() => links, [])

  return (
    <div className='home-footer'>
      <div className="part1">
        {listData.map(listItem => (
          <ul key={listItem.title} className="list-item">
            <h3>{listItem.title}</h3>
            {listItem.items.map(item => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        ))}
        <div className="list-item contact">
          <div className="icons">
            <Link to="https://twitter.com/sealosio"><TwitterIcon /></Link>
            <Link to="https://github.com/labring/sealos"><GithubIcon /></Link>
            <Link to="https://discord.gg/7bPNZfsjJu"><DiscordIcon /></Link>
          </div>
          <div className="email margin-top--lg" onClick={() => copyData('huanjieyun@163.com', '邮箱已复制')}>
            <EmailIcon/>
            <span>fanux@sealos.io</span>
          </div>
        </div>
      </div>
      <div className="part2">
        Made by Sealos Team. <small><a target="_blank" href="https://beian.miit.gov.cn/">粤ICP备2023048773号</a> 珠海环界云计算有限公司版权所有</small>
      </div>
    </div>
  )
}

export default React.memo(Footer)