import React, { useLayoutEffect } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser';
import '@site/src/css/animate.css'

import './index.scss'

const HomeKernelArch = () => {
  const isBrowser = useIsBrowser();

  const cards = [
    {title: 'Distributed Applications', desc: 'Anything else as Cloud OS Applications each combination to meet various requirements and scenarios'},
    {title: 'Cloud Kernel', desc: 'Using kubernetes as Cloud OS Core abstracting underlying resources / defining resource interfaces / standardizing application management'},
    {title: 'Cloud Driver', desc: 'Using CRI CNI CSI as Cloud OS Drivers with compute/storage/network like containerd/calico/openebs to pooling every resource everywhere'},
  ]

  useLayoutEffect(() => {
    /* 加载动画 */
    // @ts-ignore nextline
    if(isBrowser && WOW) {
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card0',
        animateClass: 'rollIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card1',
        animateClass: 'lightSpeedIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
      // @ts-ignore nextline
      new WOW({
        boxClass: 'card2',
        animateClass: 'rollIn',
        offset: 0,
        mobile: true,
        live: false
      }).init()
    }
  }, [isBrowser])

  return (
    <div id='KernelArch' className='home-kernel-arch'>
      <h1 className='title'>Kernel Arch</h1>
      <div style={{position: 'relative'}}>
        <img 
          className='example' 
          src="illustrations/Kernel-Arch.png" 
          alt="" 
        />
        <div className="cards">
          {cards.map((card, index) => (
            <div 
              key={card.title} 
              className="card-item"
            >
              <div className={`card${index}`} data-wow-duration="1s">
                <div className="index">0{index+1}</div>
                <main>
                  <header>{card.title}</header>
                  <footer>{card.desc}</footer>
                </main>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img 
        className='example2' 
        src="illustrations/Kernel-Arch2.png" 
        alt="" 
      />
    </div>
  )
}

export default React.memo(HomeKernelArch)