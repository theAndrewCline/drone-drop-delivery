import React from 'react'
import { Page } from './BasePage'
import { DroneDelivery } from '../components/svg/DroneDelivery'
import { SignUpForm } from '../components/SignUpForm'

export function SignUpPage() {
  return (
    <Page>
      <div className="flex items-center justify-center flex-col"></div>
      <SignUpForm />
      <div className="absolute">
        <DroneDelivery />
      </div>
    </Page>
  )
}
