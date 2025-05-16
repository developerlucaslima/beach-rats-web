'use client'

import { useGoogleOneTap } from '../hooks/use-google-one-tap'

export function GoogleOneTap() {
  useGoogleOneTap()
  return <div id="one-tap-container" />
}
