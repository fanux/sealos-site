import React, { useState, useEffect, useCallback } from 'react'
import "./index.scss"
import MyButton from '@site/src/components/Button'

const HomeUserBy = () => {
  return (
    <div id='Client' className='home-user-by'>
      <h1 className='title'>Used By</h1>
      <h2>More than 4k Companies and Individuals！</h2>
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
        <MyButton text='CONTACT US NOW' link='https://www.wenjuan.com/s/UZBZJv9ToJ' />
      </div>
    </div>
  )
}

export default React.memo(HomeUserBy)