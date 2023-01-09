import React, { useState, useEffect, useCallback, useRef } from 'react'
import { throttle } from "@site/src/utils";
import useIsBrowser from '@docusaurus/useIsBrowser';

import "./index.scss"

const SlideStep = () => {
  const isBrowser = useIsBrowser();

  const steps = useRef<{id: string, dom?: HTMLDivElement}[]>([
    {id: 'Start', dom: undefined},
    {id: 'Features', dom: undefined},
    {id: 'KernelArch', dom: undefined},
    {id: 'Example', dom: undefined},
    {id: 'Client', dom: undefined},
  ])
  const [currentStep, setCurrentStep] = useState(steps.current[0].id)

  const scrolling = useCallback(() => {
    throttle(() => {
      for(let i=steps.current.length-1;i>=0;i--) {
        const item = steps.current[i]
        if(!item.dom) {
          item.dom = document.querySelector(`#${item.id}`)
        }
        if((item.dom.offsetTop - screen.height/2) < document.documentElement.scrollTop) {
          setCurrentStep(item.id)
          break
        }
      }
    },100)
  },[])

  useEffect(() => {
    if(!isBrowser) return
    window.addEventListener('scroll', scrolling)
    return () => {
      window.removeEventListener('scroll', scrolling)
    }
  },[isBrowser])

  return (
    <div className='home-slide-step'>
      {steps.current.map(item => (
        <div 
          key={item.id} 
          className={`item ${currentStep === item.id ? '' : 'dot'}`}
        >
          {currentStep === item.id ? item.id : ''}
        </div>
      ))}
    </div>
  )
}

export default SlideStep