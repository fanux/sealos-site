import React, { useMemo, useLayoutEffect } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser'
import Layout from '@theme/Layout'
import useWindow from '../hooks/useWindow'
import { PC_MIN_WIDTH } from '../constants/platform'
import HomeHeader from './components/Header'
import HomeUserBy from './components/UserBy'
import HomeFooter from './components/Footer'
import Capability from './components/Capability'
import Introduce from './components/Introduce'
import Community from './components/Community'
import '@site/src/css/animate.css'
import './index.scss'

const Home = () => {
  const { screenWidth } = useWindow()
  const isPc = useMemo(() => screenWidth > PC_MIN_WIDTH, [screenWidth])
  const isBrowser = useIsBrowser()

  const PcRender = (
    <Layout>
      <div className="home">
        <HomeHeader isPc={isPc} />
        <Capability isPc={isPc} />
        <Introduce isPc={isPc} />
        <Community isPc={isPc} />
        <HomeUserBy isPc={isPc} />
        <HomeFooter isPc={isPc} />
      </div>
    </Layout>
  )

  const PhoneRender = (
    <Layout>
      <div className="home">
        <HomeHeader isPc={isPc} />
        <Capability isPc={isPc} />
        <Introduce isPc={isPc} />
        <Community isPc={isPc} />
        <HomeUserBy isPc={isPc} />
        <HomeFooter isPc={isPc} />
      </div>
    </Layout>
  )

  useLayoutEffect(() => {
    if (!isBrowser) return () => {}

    /* 给navbar加特定属性，隐藏footer */
    /* 只有Phone才有下面两个DOM */
    const NavbarDom: HTMLBaseElement = document.querySelector('.navbar')
    const FooterDom: HTMLBaseElement = document.querySelector('.footer')

    if (NavbarDom && FooterDom) {
      NavbarDom.setAttribute(
        'style',
        `
          background-color: transparent;
          box-shadow: none;
          position: absolute;
          top: -100px;
          left: 0;
        `
      )
      FooterDom.style.display = 'none'
    }

    // return () => {
    //   NavbarDom?.setAttribute('style', ``)
    //   if (FooterDom && FooterDom.style) {
    //     FooterDom.style.display = 'block'
    //   }
    // }
  }, [isPc, isBrowser])

  return PcRender
}

export default Home
