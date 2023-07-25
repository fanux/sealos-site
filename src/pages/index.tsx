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

  const PcRender = (
    <div id="sealos-layout-wrap-home-page">
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
    </div>
  )

  return PcRender
}

export default Home
