import React from 'react'
import { 
  Analytic,
  Vendor,
  Talent,
  Reward,
  Support,
  Performance,
  Header,
  Learning,
  JobPortal,
  HCAdmin,
  Group,
  // Finance,
  // DigitalDocument,
  Company } from '../..'

import { HCWrapper } from './HCEcosystem.Styles'

function HCEcosystem({
  target = '_blank',
  rel = 'noopener noreferrer',
  menus = null
}) {
  const FLEX_ROW = { display: 'flex', flexDirection: 'row' }

  const customStyle = {
    HCHeadingLabel: {
      color: '#1b1d1f',
      fontWeight: 'bold',
      fontSize: 21,
      marginLeft: '7.3px'
    },
    HCTitleLink: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      padding: '10px 25px'
    },
    HCTitleLabel: {
      cursor: 'pointer',
      color: '#1b1d1f',
      fontWeight: '600',
      fontSize: 14,
      marginLeft: 20
    },
    divider: {
      borderBottomWidth: 2,
      margin: '20px 0px'
    },
    container: {
      display: 'flex',
      width: '290px !important',
      backgroundColor: '#fff',
      flexDirection: 'column',
      marginBottom: '30px',
      paddingBottom: '18.8px',
      borderRadius: '5px',
      fontFamily: 'muli',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 6px 0px',
      backgroundColor: '#fff'
    }
  }

  const data = [
    {
      to: '/',
      label: 'Knowledge & Analytic'
    },
    {
      to: '/',
      label: 'Company'
    },
    {
      to: '/',
      label: 'HC Admin'
    },
    {
      to: '/',
      label: 'Performance'
    },
    {
      to: '/',
      label: 'Learning'
    },
    {
      to: '/',
      label: 'Talent'
    },
    {
      to: '/',
      label: 'Job Portal'
    },
    {
      to: '/',
      label: 'Reward'
    },
    {
      to: '/',
      label: 'Vendor'
    },
    {
      to: '/',
      label: 'Group'
    },
    {
      to: '/',
      label: 'Support'
    }
  ]

  const ICON_STYLE = { width: 'auto', height: '100%', margin: 'auto' }

  const getIcon = (label) => {
    switch (label) {
      case 'Knowledge & Analytic':
        return <Analytic style={ICON_STYLE} />
      case 'Company':
        return <Company style={ICON_STYLE} />
      case 'HC Admin':
        return <HCAdmin style={ICON_STYLE} />
      case 'Performance':
        return <Performance style={ICON_STYLE} />
      case 'Learning':
        return <Learning style={ICON_STYLE} />
      case 'Talent':
        return <Talent style={ICON_STYLE} />
      case 'Job Portal':
        return <JobPortal style={ICON_STYLE} />
      case 'Reward':
        return <Reward style={ICON_STYLE} />
      case 'Vendor':
        return <Vendor style={ICON_STYLE} />
      case 'Group':
        return <Group style={ICON_STYLE} />
      default:
        return <Support style={ICON_STYLE} />
    }
  }

  const item = menus || data
  return (
    <HCWrapper>
      <div
        style={{
          ...FLEX_ROW,
          margin: '12px 18px 3.8px 25px',
          alignItems: 'center',
          paddingBottom: '6px',
          borderBottom: 'solid 1px #a9a8a8'
        }}
      >
        <Header style={ICON_STYLE} />
        <label style={customStyle.HCHeadingLabel}>HC Ecosystem</label>
      </div>
      {item &&
        item.map(({ to, logo, label, disable = false }, i) => (
          <a
            href={disable ? '/' : to}
            target={target}
            key={`${i}-${label}`}
            rel={rel}
            style={{
              ...customStyle.HCTitleLink,
              ...(disable && { cursor: 'not-allowed' })
            }}
          >
            <div style={{ width: 20, height: 20 }}>
              {getIcon(label)}
              {/* <img
                
                alt='outline-apps-icon'
              /> */}
            </div>
            <label
              style={{
                ...customStyle.HCTitleLabel,
                ...(disable && { cursor: 'not-allowed' })
              }}
            >
              {label}
            </label>
          </a>
        ))}
    </HCWrapper>
  )
}

export default HCEcosystem
