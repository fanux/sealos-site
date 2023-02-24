import React from 'react'
import "./index.scss"
import MyButton from '@site/src/components/Button'
import Translate from '@docusaurus/Translate';

const HomeUserBy = () => {
  return (
    <div id='Client' className='home-user-by'>
      <h1 className='title'><Translate>Used By</Translate></h1>
      <h2><Translate>More than 4,000 Companies and 100,000+ Individuals!</Translate></h2>
      {/* 品牌商滚动 */}
      <div className="scroll-brand">
        <div className='img-content'>
          <img
            src="illustrations/userBy.png"
          />
          <img
            src="illustrations/userBy.png"
          />
        </div>
      </div>
      <div className="contact-btn">
        <MyButton link='https://www.wenjuan.com/s/UZBZJv9ToJ'>
          <Translate>CONTACT US NOW</Translate>
        </MyButton>
      </div>
    </div>
  )
}

export default React.memo(HomeUserBy)
