import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react'
import Translate from '@docusaurus/Translate';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { getDomOffsetTop } from "@site/src/utils"
import "./index.scss"

const Feature = ({
  isPc
}: {
  isPc: boolean
}) => {
  const FeatureList = [
    {
      id: 'native',
      title: <Translate>Sealos cloud-native App Store</Translate>,
      desc: <Translate>Fully compatible with Docker registry, enjoy seamless one-click installation of various cloud-native distributed applications</Translate>,
      pattern: require('@site/static/illustrations/features-pattern1.png').default,
      result: require('@site/static/illustrations/features1.png').default
    },
    {
      id: 'pgsql',
      title: <Translate>Sealos PostgreSQL Database</Translate>,
      desc: <Translate>One-click creation of a highly available PostgreSQL database, with multi-database cluster management and backup and recovery capabilities</Translate>,
      pattern: require('@site/static/illustrations/features-pattern2.png').default,
      result: require('@site/static/illustrations/features2.png').default
    },
    {
      id: 'cloud',
      title: <Translate>Sealos Cloud Provider</Translate>,
      desc: <Translate>Effortlessly establish an independent Kubernetes cluster within minutes on AWS or other public clouds, and effortlessly manage multiple clusters</Translate>,
      pattern: require('@site/static/illustrations/features-pattern3.png').default,
      result: require('@site/static/illustrations/features3.png').default
    },
  ]
  const isBrowser = useIsBrowser();

  const FeaturesDom = useRef<HTMLDivElement>() // featuresDOM
  const FeatureImgHeight = useRef(0) 
  const offsetTop = useRef(0) // featureDOM偏移顶部距离
  const [currentIndex, setCurrentIndex] = useState<number>()

  const scrolling = useCallback(() => {
    if(!FeaturesDom.current || !isPc) return
    const scrollTop = document.documentElement.scrollTop
    
    /* 计算DOM位置, */
    if(scrollTop < offsetTop.current) { // 在features上方，内容随滚动条正常滚动
      FeaturesDom.current.className = `home-features`
    } else{
      /* 
        计算最后一张图退出fix的高度。 
        148: title高度 
        50: 图片的marginBottom距离
      */
      const bottom = offsetTop.current + 2*(FeatureImgHeight.current + 150)
      if(scrollTop > bottom) { // 如果内容已经滚到底部，内容随滚动条正常滚动
        FeaturesDom.current.classList.contains('fixed') && FeaturesDom.current.classList.remove('fixed')
        !FeaturesDom.current.classList.contains('bottom') && FeaturesDom.current.classList.add('bottom')
      } else { // 内容完全在屏幕内，左侧需要固定
        !FeaturesDom.current.classList.contains('fixed') && FeaturesDom.current.classList.add('fixed')
        FeaturesDom.current.classList.contains('bottom') && FeaturesDom.current.classList.remove('bottom')
      }
    }

    if(scrollTop > 100) {
      FeaturesDom.current.classList.add('background-blur')
    }

    /* 计算展示的文案 */
    let index = 0
    if(scrollTop > offsetTop.current + 148 + 1.5*(FeatureImgHeight.current + 150)) {
      index = 2
    } else if(scrollTop > offsetTop.current + 148 + 0.4*(FeatureImgHeight.current + 150)) {
      index = 1
    }
    setCurrentIndex(index)
  },[])

  useLayoutEffect(() => {
    if(isBrowser) {
      const timer = setTimeout(() => { // 获取DOM一些高度和偏移距离
        FeaturesDom.current = document.querySelector(`#Features`)
        FeatureImgHeight.current = FeaturesDom.current.querySelector('.feature-img')?.clientHeight
        offsetTop.current = getDomOffsetTop(FeaturesDom.current)
        requestAnimationFrame(scrolling)
      }, 300);

      const scrollCb = () =>  requestAnimationFrame(scrolling)
      window.addEventListener('scroll', scrollCb)

      return () => {
        clearTimeout(timer)
        window.removeEventListener('scroll', scrollCb)
      }
    }
  },[isBrowser])

  useEffect(() => {
    if(!FeaturesDom.current) return
    FeaturesDom.current.classList.add('change-animation')
    const timer = setTimeout(() => {
      FeaturesDom.current.classList.remove('change-animation')
    }, 200);

    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex])

  const RenderPc = (
    <main>
      <div 
        className="left" 
        style={{
          // @ts-ignore nextLine
          ['--bottom-offset-top']: `${2*(FeatureImgHeight.current + 150) + 80}px`
        }}
      >
        <img className='pattern' src={FeatureList[currentIndex]?.pattern} alt="" />
        <h2>{FeatureList[currentIndex]?.title}</h2>
        <p>{FeatureList[currentIndex]?.desc}</p>
      </div>
      <div className="right">
        {FeatureList.map(item => (
          <div key={item.id} className="feature-img">
            <img src={item.result} alt="" />
          </div>
        ))}
      </div>
    </main>
  )

  const RenderPhone =  (
    <main>
      {FeatureList.map(item => (
        <div key={item.id} className="feature-item">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <img src={item.result} alt="" />
        </div>
      ))}
    </main>
  )

  return (
    <div id='Features' className='home-features'>
      <h1 className='title'><Translate>Features</Translate></h1>
      {
        isPc ? RenderPc : RenderPhone
      }
    </div>
  )
}

export default Feature