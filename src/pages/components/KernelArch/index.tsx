import React, { useEffect } from 'react'
import useIsBrowser from '@docusaurus/useIsBrowser';
import '@site/src/css/animate.css'

import './index.scss'

const HomeKernelArch = () => {
  const isBrowser = useIsBrowser();

  const cards = [
    {title: 'Cloud Driver', desc: 'Using CRI CNI CSI as Cloud OS Driverswith compute / storage / network like containerd / calico / openebs to pooling every resource everywhere'},
    {title: 'Cloud Kernel', desc: 'Using CRI CNI CSI as Cloud OS Driverswith compute / storage / network like containerd / calico / openebs to pooling every resource everywhere'},
    {title: 'Distributed Applications', desc: 'Using CRI CNI CSI as Cloud OS Driverswith compute / storage / network like containerd / calico / openebs to pooling every resource everywhere'},
  ]

  useEffect(() => {
    // if(isBrowser) {
    //   /* 加载动画 */
    //   new WOW({
    //     boxClass: 'card0',
    //     animateClass: 'rollIn',
    //     offset: 0,
    //     mobile: true,
    //     live: false
    //   }).init()
    //   new WOW({
    //     boxClass: 'card1',
    //     animateClass: 'lightSpeedIn',
    //     offset: 0,
    //     mobile: true,
    //     live: false
    //   }).init()
    //   new WOW({
    //     boxClass: 'card2',
    //     animateClass: 'rollIn',
    //     offset: 0,
    //     mobile: true,
    //     live: false
    //   }).init()
    // }
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