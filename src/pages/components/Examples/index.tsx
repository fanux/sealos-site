import React, { useState, useCallback } from 'react'
import './index.scss'

import LeftIcon from "@site/static/illustrations/example-left-icon.svg"
import RightIcon from "@site/static/illustrations/example-right-icon.svg"
import MyButton from '@site/src/components/Button'
import { copyData } from '@site/src/utils'

const HomepageExamples = ({
  isPc
}: {
  isPc: boolean
}) => {
  const tabs = ['Kubernetes', 'Storage', 'Network', 'Database', 'Monitoring', 'GPU', 'MQ', 'Dashboard', 'Rancher', 'Kubesphere', 'CICD']
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const slideCards = [
    {
      title: 'Kubesphere',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1n
           --masters 192.168.64.2,192.168.64.22,192.168.64.20n
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'CICD',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Kubernetes',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
$ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1

# Run a HA kubernetes cluster
$ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      --masters 192.168.64.2,192.168.64.22,192.168.64.20
      --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]

# Add masters or nodes
$ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22

# Delete your cluster
$ sealos reset
`
    },
    {
      title: 'Storage',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Network',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Database',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Monitoring',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'GPU',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'MQ',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Dashboard',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Rancher',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Kubesphere',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'CICD',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Kubernetes',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
    {
      title: 'Storage',
      desc: 'All Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:\nAll Appwrite SDKs are carefully designed to make developers lives easier:',
      code: `# Run a single node kubernetes
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
      
      # Run a HA kubernetes cluster
      $ sealos run labring/kubernetes:v1.24.0 labring/calico:v3.22.1
           --masters 192.168.64.2,192.168.64.22,192.168.64.20
           --nodes 192.168.64.21,192.168.64.19 -p [your-ssh-passwd]
      
      # Add masters or nodes
      $ sealos add --masters 192.168.64.20 --nodes 192.168.64.21,192.168.64.22
      
      # Delete your cluster
      $ sealos reset`
    },
  ]
  const [selectedCardIndex, setSelectedCardIndex] = useState(2) // 当前活跃的轮播图
  const [isTransition, setIsTransition] = useState(true) // 是否有动画效果

  /**
   * 点击切换卡片
   */
  const onclickChangeCard = useCallback((num: 1|-1) => {
    // tabs的index，本来就比cardIndex少1
    const index = selectedCardIndex + num
    setSelectedTab(tabs[index-2])
    setSelectedCardIndex(index)

    /* 无限轮播处理。先滚动到加长卡片，然后在无缝切换 */
    if(index === 1) { // 列表的第二个。相当于实际的最后一个
      setSelectedTab(tabs[tabs.length-1])
      setTimeout(() => { // 600ms后，无动画的切换到最后一页
        setIsTransition(false)
        setSelectedCardIndex(slideCards.length-3)
        setTimeout(() => {
          setIsTransition(true)
        },100);
      }, 600);
    } else if(index === slideCards.length-2) {
      setSelectedTab(tabs[0])
      setTimeout(() => {
        setIsTransition(false)
        setSelectedCardIndex(2)
        setTimeout(() => {
          setIsTransition(true)
        },100);
      }, 600);
    }
  },[selectedCardIndex])

  const RenderPC = (
    <main>
      <LeftIcon className="pre-card" role='img' onClick={() => onclickChangeCard(-1)} />
      {slideCards.map((card, index) => (
        <div 
          key={card.title + index} 
          className={`card-item`}
          style={{
            'transform': `translateX(-${187.5 + (selectedCardIndex-2) * 100}%) scale(${index === selectedCardIndex ? 1 : 0.95},${index === selectedCardIndex ? 1 : 0.9})`,
            'transition': isTransition ? '.6s ease-in-out' : 'none',
          }}
        >
          <h3>{card.title}</h3>
          <div className="desc">{card.desc}</div>
          <div className="code">
            {card.code}
            <div className='copy-btn' onClick={() => copyData(card.code, '指令已复制')}>
              <MyButton text='Copy' link='' />
            </div>
          </div>
        </div>
      ))}
      <RightIcon className="next-card" role='img' onClick={() => onclickChangeCard(1)} />
    </main>
  )

  const RenderPhone = (
    <main>
      <div className="card-item">
        <h3>{slideCards[selectedCardIndex].title}</h3>
        <div className="desc">{slideCards[selectedCardIndex].desc}</div>
        <div className="code">
          {slideCards[selectedCardIndex].code}
        </div>
      </div>
    </main>
  )

  return (
    <div id='Example' className='home-examples'>
      <h1 className='title'>Examples</h1>
      <img className='left-icon' src="illustrations/example-left.png" alt="" />
      <img className='right-icon' src="illustrations/example-right.png" alt="" />
      <header>
        {tabs.map(tab => (
          <div 
            key={tab} 
            className={`tab ${tab === selectedTab ? 'active' : ''}`}
            onClick={() => {
              setSelectedTab(tab)
              setSelectedCardIndex(slideCards.findIndex((item, i) => i>1 && item.title === tab))
            }}
          >
            {tab}
          </div>
        ))}
      </header>
      { isPc ? RenderPC : RenderPhone }
    </div>
  )
}

export default React.memo(HomepageExamples)