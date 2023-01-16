import React, { useMemo, useLayoutEffect } from "react";
import useIsBrowser from '@docusaurus/useIsBrowser';
import Layout from "@theme/Layout";
import useWindow from "../hooks/useWindow";
import { PC_MIN_WIDTH } from "../constants/platform";

import HomeHeader from "./components/Header"
import HomeFeature from "./components/Feature"
import HomeKernelArch from "./components/KernelArch"
import HomeExamples from "./components/Examples"
import HomeUserBy from "./components/UserBy"
import HomeFooter from "./components/Footer"
import SlideStep from "./components/SlideStep"

import "./index.scss"

const Home = () => {
  const { screenWidth } = useWindow()
  const isPc = useMemo(() => screenWidth > PC_MIN_WIDTH, [screenWidth])
  const isBrowser = useIsBrowser();

  const PcRender = (
    <div className="home">
      <HomeHeader />
      <HomeFeature isPc={isPc} />
      <HomeKernelArch isPc={isPc} />
      <HomeExamples isPc={isPc} />
      <HomeUserBy />
      <HomeFooter/>
      <SlideStep/>
    </div>
  )

  const PhoneRender =(
    <Layout>
      <div className="home">
        <HomeHeader />
        <HomeFeature isPc={isPc} />
        <HomeKernelArch isPc={isPc} />
        <HomeExamples isPc={isPc} />
        <HomeUserBy />
        <HomeFooter/>
      </div>
    </Layout>
  )

  useLayoutEffect(() => {
    if(!isBrowser) return () => {}
    
    /* 给navbar加特定属性，隐藏footer */
    /* 只有Phone才有下面两个DOM */
    const NavbarDom:HTMLBaseElement = document.querySelector(".navbar")
    const FooterDom:HTMLBaseElement = document.querySelector('.footer')

    if(NavbarDom && FooterDom) {
      if(isPc) {
        NavbarDom.setAttribute('style', ``)
        FooterDom.style.display = 'block'
      } else {
        NavbarDom.setAttribute('style', `
          background-color: transparent;
          box-shadow: none;
          position: absolute;
          left: 0;
          right: 0;
        `)
        FooterDom.style.display = 'none'
      }
    }

    return () => {
      NavbarDom?.setAttribute('style', ``)
      if(FooterDom && FooterDom.style) {
        FooterDom.style.display = 'block'
      }
    }
  },[isPc, isBrowser])

  return isPc ?  PcRender : PhoneRender;
}

export default Home