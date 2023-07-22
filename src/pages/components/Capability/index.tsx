import React, { useLayoutEffect } from 'react'
import CometIcon from '../Comet'
import ApplaunchpadIcon from '@site/static/icons/applaunchpad.svg'
import AppsIcon from '@site/static/icons/apps.svg'
import DataBaseIcon from '@site/static/icons/database.svg'
import useIsBrowser from '@docusaurus/useIsBrowser'
import './index.scss'

const Capability = ({ isPc }: { isPc: boolean }) => {
  const isBrowser = useIsBrowser()

  useLayoutEffect(() => {
    // @ts-ignore nextline
    if (isBrowser && isPc && WOW) {
      // @ts-ignore nextline
      new WOW({
        boxClass: 'animate__fadeIn',
        animateClass: 'animate__fadeIn',
        offset: 0,
        mobile: false,
        live: false,
      }).init()
    }
  }, [isBrowser])

  if (!isPc) {
    return (
      <div className="capability">
        <div className="comet-icon">
          <CometIcon />
        </div>
        <h1>The Capabilities of Sealos</h1>
        <div className="app-management">
          <div className="app-management-text">
            <div className="logo">
              <ApplaunchpadIcon width={20} height={20} />
            </div>
            <h3>Application Management</h3>
            <h4>
              Rapidly deploy any distributed application with the ability to
              access the public network.
            </h4>
            <a
              href="https://cloud.sealos.io/?openapp=system-applaunchpad%3F"
              target="_black">
              Explore {'>'}
            </a>
          </div>
          <img
            draggable="false"
            className="app-management-img"
            src={
              require('@site/static/illustrations/app-launchpad-detail.png')
                .default
            }
            alt="app-management"
          />
        </div>

        <div className="application" data-wow-duration="1s">
          <div className="logo">
            <DataBaseIcon />
          </div>
          <div className="application-title">Database</div>
          <div className="application-text">
            Create highly available databases in seconds that support MySQL,
            PostgreSQL, MongoDB, and Redis.
          </div>
          <a
            href="https://cloud.sealos.io/?openapp=system-dbprovider%3F"
            target="_black">
            Explore {'>'}
          </a>
          <img
            draggable="false"
            className="database-img"
            src={
              require('@site/static/illustrations/capability-dabase.png')
                .default
            }
            alt="app-management"
          />
        </div>

        <div className="application">
          <div className="logo">
            <AppsIcon />
          </div>
          <div className="application-title">Easy Public Network Access</div>
          <div className="application-text">
            Automatically assign second-level domain for applications,
            effortlessly achieving public network access, while also supporting
            custom domain name binding.
          </div>
          <a
            className="application-link"
            href="https://cloud.sealos.io"
            target="_black">
            Explore {'>'}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="capability">
      <div className="comet-icon">
        <CometIcon />
      </div>
      <h1>The Capabilities of Sealos</h1>
      <div className="app-management animate__fadeIn" data-wow-duration="1s">
        <div className="app-management-text">
          <div className="logo">
            <ApplaunchpadIcon />
          </div>
          <h3>Application Management</h3>
          <h4>
            Rapidly deploy any distributed application with the ability to
            access the public network.
          </h4>
          <a
            href="https://cloud.sealos.io/?openapp=system-applaunchpad%3F"
            target="_black">
            Explore {'>'}
          </a>
        </div>
        <img
          draggable="false"
          className="app-management-img"
          src={
            require('@site/static/illustrations/app-launchpad-detail.png')
              .default
          }
          alt="app-management"
        />
      </div>
      <div className="applications" data-wow-duration="1s">
        <div className="application animate__fadeIn" data-wow-duration="1s">
          <div className="logo">
            <DataBaseIcon />
          </div>
          <div className="application-title">Database Management</div>
          <div className="application-text">
            Create highly available databases in seconds that support MySQL,
            PostgreSQL, MongoDB, and Redis.
          </div>
          <a
            href="https://cloud.sealos.io/?openapp=system-dbprovider%3F"
            target="_black">
            Explore {'>'}
          </a>
          <img
            draggable="false"
            className="database-img"
            src={
              require('@site/static/illustrations/capability-dabase.png')
                .default
            }
            alt="app-management"
          />
        </div>
        <div className="application animate__fadeIn" data-wow-duration="1s">
          <div className="logo">
            <AppsIcon />
          </div>
          <div className="application-title">Easy Public Network Access</div>
          <div className="application-text">
            Automatically assign second-level domain for applications,
            effortlessly achieving public network access, while also supporting
            custom domain name binding.
          </div>
          <a
            className="application-link"
            href="https://cloud.sealos.io"
            target="_black">
            Explore {'>'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Capability)
