import React, { useState, useCallback } from 'react'
import './index.scss'

import LeftIcon from "@site/static/illustrations/example-left-icon.svg"
import RightIcon from "@site/static/illustrations/example-right-icon.svg"
import MyButton from '@site/src/components/Button'
import { copyData } from '@site/src/utils'
import PrismCode from '@site/src/components/CodeBlock'
import Translate from '@docusaurus/Translate';

const HomepageExamples = ({
  isPc
}: {
  isPc: boolean
}) => {
  const slideCards = [
    {
      translateDom: <Translate>Platform</Translate>,
      title: 'Platform',
      desc: 'Support various dashboards, allowing users to easily manage kubernetes clusters',
      code: ``
    },
    {
      translateDom: <Translate>GitOps</Translate>,
      title: 'GitOps',
      desc: 'Support one-click operation for mainstream CI/CD systems such as Argo CD and Drone',
      code: `# Jenkins
$ sealos run labring/jenkins:v2.346.2

# Argocd
$ sealos run labring/argocd:v2.4.8

# Tekton
$ sealos run labring/tekton:v0.61.0

# Fluxcd
$ sealos run labring/fluxcd:0.36.0
$ sealos run labring/weave-gitops:0.10.1`
    },
    {
      translateDom: <Translate>Kubernetes</Translate>,
      title: 'Kubernetes',
      desc: <Translate>Comprehensive Kubernetes Cluster management throughout its entire lifecycle, including Installation, Scaling, Backup, Recovery, and Upgrades</Translate>,
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
      translateDom: <Translate>Storage</Translate>,
      title: 'Storage',
      desc: <Translate>Supports block storage, object storage, and file storage with one-click operation</Translate>,
      code: `# Install helm
$ sealos run labring/helm:v3.8.2

# Block storage
$ sealos run labring/openebs:v1.9.0

# Object storage
$ sealos run labring/minio-operator:v4.4.16`
    },
    {
      translateDom: <Translate>Network</Translate>,
      title: 'Network',
      desc: <Translate>Supports network plugins such as Calico, Flannel, and Cilium with the freedom of customization and choice</Translate>,
      code: `# Using flannel
$ sealos run labring/flannel:v0.18.1

# Using calico
$ sealos run labring/calico:v3.22.1

# Nginx ingress
$ sealos run labring/ingress-nginx:4.1.0`
    },
    {
      translateDom: <Translate>Database</Translate>,
      title: 'Database',
      desc: <Translate>Supports both relational and non-relational databases with high availability, automatic backups, and multi-database instance management capabilities</Translate>,
      code: `# MySQL cluster
$ sealos run labring/mysql-operator:8.0.23-14.1

# Clickhouse cluster
$ sealos run labring/clickhouse:0.18.4

# Redis cluster
$ sealos run labring/redis-operator:3.1.4`
    },
    {
      translateDom: <Translate>Monitoring</Translate>,
      title: 'Monitoring',
      desc: <Translate>Easily deploy a monitoring and alarm system with just one click, without the need for additional configuration, and enjoy a simple and intuitive visual experience</Translate>,
      code: `# Prometheus stack
$ sealos run labring/kube-prometheus-stack:35.0.0

# Metric server
$ sealos run labring/metrics-server:v0.6.1

# Any exporter
$ sealos run labring/redis-exporter:latest

# elasticsearch
$ sealos run labring/elastic:7.17.3
$ sealos run labring/fluent-bit:0.20.9
or
$ sealos run labring/fluent-operator-containerd:v1.5.1

# Eck-operator
$ sealos run labring/eck-operator:2.4.0

# Loki
$ sealos run labring/loki:2.6.1`
    },
    {
      translateDom: <Translate>GPU</Translate>,
      title: 'GPU',
      desc: <Translate>One-click construction of GPU drivers, device discovery, GPU resource monitoring, and the easy creation of a deep learning platform with AI capabilities</Translate>,
      code: `# GPU driver, runtime tools, and controller
# All in one~
$ sealos run labring/gpu-operator:v1.10.1`
    },
    {
      translateDom: <Translate>MQ</Translate>,
      title: 'MQ',
      desc: <Translate>Supports various mainstream message queues with high availability and automatic monitoring</Translate>,
      code: `# Kafka HA, controller instance and exporter
$ sealos run labring/kafka-operator:0.28.0
$ sealos run labring/kafka-exporter:latest`
    },
    {
      translateDom: <Translate>Dashboard</Translate>,
      title: 'Dashboard',
      desc: <Translate>Supports various dashboards, enabling users to manage Kubernetes clusters with ease</Translate>,
      code: `# Kubernetes-dashboard
$ sealos run docker.io/labring/kubernetes-dashboard:v1.0.8

# kuboard
$ sealos run labring/kuboard:v3`
    },
    {
      translateDom: <Translate>Platform</Translate>,
      title: 'Platform',
      desc: <Translate>Support various Container Platforms, enabling users to manage Kubernetes clusters with ease</Translate>,
      code: `# Rancher, Notes: rancher depends on ingress-nginx and cert-manager, install it first.
$ sealos run labring/ingress-nginx:4.1.0 labring/cert-manager:v1.8.0
$ sealos run labring/rancher:v2.6.9

# kubesphere
$ sealos run labring/kubesphere:v3.3.1

# kubegems
sealos run labring/kubegems:v1.21.4`
    },
    {
      translateDom: <Translate>GitOps</Translate>,
      title: 'GitOps',
      desc: <Translate>Support one-click operation for mainstream CI/CD systems such as Argo CD and Drone</Translate>,
      code: `# Jenkins
$ sealos run labring/jenkins:v2.346.2

# Argocd
$ sealos run labring/argocd:v2.4.8

# Tekton
$ sealos run labring/tekton:v0.61.0

# Fluxcd
$ sealos run labring/fluxcd:0.36.0
$ sealos run labring/weave-gitops:0.10.1`
    },
    {
      translateDom: <Translate>Kubernetes</Translate>,
      title: 'Kubernetes',
      desc: 'Comprehensive Kubernetes Cluster management throughout its entire lifecycle, including Installation, Scaling, Backup, Recovery, and Upgrades',
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
      translateDom: <Translate>Storage</Translate>,
      title: 'Storage',
      desc: 'Supports block storage, object storage, and file storage with one-click operation',
      code: `# Install helm
$ sealos run labring/helm:v3.8.2

# Block storage
$ sealos run labring/openebs:v1.9.0

# Object storage
$ sealos run labring/minio-operator:v4.4.16`
    },
  ]
  const [selectedCardIndex, setSelectedCardIndex] = useState(2) // 当前活跃的轮播图
  const tabs = slideCards.slice(2, -2)
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [isTransition, setIsTransition] = useState(true) // 是否有动画效果
  const [translating, setTranslating] = useState(false) // 是否有动画效果


  /**
   * 点击切换卡片
   */
  const onclickChangeCard = useCallback((num: 1|-1) => {
    if(translating) return

    // tabs的index，本来就比cardIndex少1
    const index = selectedCardIndex + num
    setSelectedTabIndex(index-2)
    setSelectedCardIndex(index)

    /* 无限轮播处理。先滚动到加长卡片，然后在无缝切换 */
    if(index === 1) { // 列表的第二个。相当于实际的最后一个
      setTranslating(true)
      setSelectedTabIndex(tabs.length-1)
      setTimeout(() => { // 600ms后，无动画的切换到最后一页
        setIsTransition(false)
        setSelectedCardIndex(slideCards.length-3)
        setTimeout(() => {
          setIsTransition(true)
      setTranslating(false)
        },100);
      }, 600);
    } else if(index === slideCards.length-2) {
      setTranslating(true)
      setSelectedTabIndex(0)
      setTimeout(() => {
        setIsTransition(false)
        setSelectedCardIndex(2)
        setTimeout(() => {
          setIsTransition(true)
      setTranslating(false)
        },100);
      }, 600);
    }
  },[selectedCardIndex,translating])

  const RenderPC = (
    <main>
      <LeftIcon className="pre-card" role='img' onClick={() => onclickChangeCard(-1)} />
      {slideCards.map((card, index) => (
        <div 
          key={index} 
          className={`card-item`}
          style={{
            'transform': `translateX(-${187.5 + (selectedCardIndex-2) * 100}%) scale(${index === selectedCardIndex ? 1 : 0.95},${index === selectedCardIndex ? 1 : 0.9})`,
            'transition': isTransition ? '.6s ease-in-out' : 'none',
          }}
        >
          <h3>{card.title}</h3>
          <div className="desc">{card.desc}</div>
          <div className="code">
            <PrismCode code={card.code} language="shell" />
            <div className='copy-btn' onClick={() => copyData(card.code, '指令已复制')}>
              <MyButton link='' ><Translate>Copy</Translate></MyButton>
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
        <h3>{slideCards[selectedCardIndex]?.title}</h3>
        <div className="desc">{slideCards[selectedCardIndex].desc}</div>
        <div className="code">
          <pre>
            <code>{slideCards[selectedCardIndex].code}</code>
            <div className='copy-btn' onClick={() => copyData(slideCards[selectedCardIndex].code, '指令已复制')}>
              <MyButton link='' ><Translate>Copy</Translate></MyButton>
            </div>
          </pre>
        </div>
      </div>
    </main>
  )

  return (
    <div id='Example' className='home-examples'>
      <h1 className='title'><Translate>Examples</Translate></h1>
      <img className='left-icon' src={require("@site/static/illustrations/example-left.png").default} alt="" />
      <img className='right-icon' src={require("@site/static/illustrations/example-right.png").default} alt="" />
      <header>
        {tabs.map((tab,i) => (
          <div 
            key={i} 
            className={`tab ${i===selectedTabIndex ? 'active' : ''}`}
            onClick={() => {
              setSelectedTabIndex(i)
              setSelectedCardIndex(slideCards.findIndex((item, i) => i>1 && item.title === tab.title))
            }}
          >
            {tab.translateDom}
          </div>
        ))}
      </header>
      { isPc ? RenderPC : RenderPhone }
    </div>
  )
}

export default React.memo(HomepageExamples)