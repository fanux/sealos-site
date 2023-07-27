import '@site/src/css/animate.css'
import Layout from '@theme/Layout'
import React, { useMemo } from 'react'
import { PC_MIN_WIDTH } from '../constants/platform'
import useWindow from '../hooks/useWindow'
import Capability from './components/Capability'
import Community from './components/Community'
import HomeFooter from './components/Footer'
import HomeHeader from './components/Header'
import Introduce from './components/Introduce'
import HomeUserBy from './components/UserBy'
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
