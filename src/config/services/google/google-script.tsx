'use client'

import Script from 'next/script'

export function GoogleScript() {
  return (
    <Script
      src="https://accounts.google.com/gsi/client"
      async
      defer
      strategy="afterInteractive"
      onLoad={() => {
        console.log('✅ Google SDK loaded')
        window.dispatchEvent(new Event('google-sdk-loaded'))
      }}
    />
  )
}
