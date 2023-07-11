import React, { useLayoutEffect } from 'react'
import CometIcon from '../Comet'
import RouteIcon from '@site/static/icons/route-icon.svg'
import useIsBrowser from '@docusaurus/useIsBrowser'
import './index.scss'

const Introduce = ({ isPc }: { isPc: boolean }) => {
  const isBrowser = useIsBrowser()

  useLayoutEffect(() => {
    // @ts-ignore nextline
    if (isBrowser && WOW) {
      // @ts-ignore nextline
      new WOW({
        boxClass: 'animate__fadeIn',
        animateClass: 'animate__fadeIn',
        offset: 0,
        mobile: true,
        live: false,
      }).init()
    }
  }, [isBrowser])

  if (!isPc) {
    return (
      <div className="introduce">
        <div className="comet-icon">
          <CometIcon />
        </div>
        <h1>Why Sealos</h1>
        <div className="features">
          <div className="route">
            <div className="icon1">
              <RouteIcon />
            </div>
            <div className="line1"></div>
            <div className="icon2">
              <RouteIcon />
            </div>
            <div className="line2"></div>
            <div className="icon3">
              <RouteIcon />
            </div>
            <div className="line3"></div>
            <div className="icon4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none">
                <circle cx="10.0002" cy="9.51913" r="9.18033" fill="#193246" />
              </svg>
            </div>
          </div>
          <div className="right">
            <div className="tag1">Affordable</div>
            <div className="main-text text-affordable">
              Resource Conservation and Cost Reduction
            </div>
            <div className="aid-text">
              You only pay for containers. The auto-scaling feature
              fundamentally solves the issue of resource wastage, saving you a
              substantial amount of costs.
            </div>
            <div className="tag2">Simple</div>
            <div className="main-text">
              Universal Application and No Cognitive Load
            </div>
            <div className="aid-text">
              You can focus on your own business without being burdened by
              irrelevant complexities. Regardless of your proficiency with
              Kubernetes, you can easily utilize Sealos.
            </div>
            <div className="tag3">Flexible and Powerful</div>
            <div className="main-text text-powerful">
              Balanced Flexibility and Security
            </div>
            <div className="aid-text">
              Its unique multi-tenant sharing mechanism can achieve effective
              resource isolation and collaboration while ensuring safety.
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="introduce">
      <div className="comet-icon">
        <CometIcon />
      </div>
      <h1>Why Sealos</h1>
      <div className="features">
        <div className="left animate__fadeIn" data-wow-duration="1s">
          <span className="tag tag-affordable">Affordable</span>
          <div className="main-text text-affordable">
            Resource Conservation and Cost Reduction
          </div>
          <div className="aid-text">
            You only pay for containers. The auto-scaling feature fundamentally
            solves the issue of resource wastage, saving you a substantial
            amount of costs.
          </div>
          <span className="tag tag-powerful">Flexible and Powerful</span>
          <div className="main-text text-powerful">
            Balanced Flexibility and Security
          </div>
          <div className="aid-text">
            Its unique multi-tenant sharing mechanism can achieve effective
            resource isolation and collaboration while ensuring safety.
          </div>
        </div>

        <div className="route">
          <div className="icon1">
            <RouteIcon />
          </div>
          <div className="line1"></div>
          <div className="icon2">
            <RouteIcon />
          </div>
          <div className="line2"></div>
          <div className="icon3">
            <RouteIcon />
          </div>
          <div className="line3"></div>
          <div className="icon4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none">
              <circle cx="10.0002" cy="9.51913" r="9.18033" fill="#193246" />
            </svg>
          </div>
        </div>
        <div className="right animate__fadeIn" data-wow-duration="1s">
          <span className="tag text">Simple</span>
          <div className="main-text">
            Universal Application and No Cognitive Load
          </div>
          <div className="aid-text">
            You can focus on your own business without being burdened by
            irrelevant complexities. Regardless of your proficiency with
            Kubernetes, you can easily utilize Sealos.
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Introduce)
