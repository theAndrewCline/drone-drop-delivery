import React, { useRef, RefObject, useState } from 'react'
import { locationToUrl, Location } from './lib/location'
import { PaperPlane } from './PaperPlane'

async function getGeoCode(url: string): Promise<any> {
  return fetch(url).then((d) => d.json())
}

type FormItemProps = {
  label: string
  placeholder: string
  ref?: RefObject<HTMLInputElement>
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FormItem({ label, placeholder, ref, onInput }: FormItemProps) {
  return (
    <div className="flex flex-col mb-2 justify-left">
      <label className="mb-1 capitalize text-md" htmlFor={label}>
        {label}:
      </label>
      <input
        id={label}
        className="px-2 py-1 border-2 border-gray-300 border-solid rounded text-md"
        type="text"
        placeholder={placeholder}
        ref={ref}
        onInput={onInput}
      />
    </div>
  )
}

export function Form() {
  const nameRef = useRef(null)

  const [location, setLocation] = useState<Location>({
    address: '',
    unit: '',
    city: '',
    state: '',
    zip: ''
  })

  async function handleFormSubmit() {
    try {
      const geoCodeData = await getGeoCode(locationToUrl(location))
      console.log(geoCodeData)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      id="add-info-form"
      className="z-10 flex flex-col items-center p-4 px-12 bg-gray-200 shadow-lg rounded-2xl bg-opactiy-0"
    >
      <PaperPlane className="h-16 mb-4" />
      <h1 className="mb-4 text-2xl font-bold">Add Your Location</h1>

      <FormItem label="name" placeholder="Jane Doe" ref={nameRef} />
      <FormItem
        label="address"
        placeholder="123 Charming Ave"
        onInput={(e) => {
          setLocation({ ...location, address: e.target.value })
        }}
      />
      <FormItem
        label="unit"
        placeholder="Apt 2"
        onInput={(e) => {
          setLocation({ ...location, unit: e.target.value })
        }}
      />
      <FormItem
        label="city"
        placeholder="New York"
        onInput={(e) => {
          setLocation({ ...location, city: e.target.value })
        }}
      />
      <FormItem
        label="state"
        placeholder="New York"
        onInput={(e) => {
          setLocation({ ...location, state: e.target.value })
        }}
      />
      <FormItem
        label="zip"
        placeholder="11201"
        onInput={(e) => {
          setLocation({ ...location, zip: e.target.value })
        }}
      />

      <button
        onClick={(_) => {
          handleFormSubmit()
        }}
        className="px-4 py-2 my-4 font-bold text-white bg-green-500 rounded transition duration-500 hover:bg-green-600 hover:shadow-xl"
      >
        Add Location
      </button>
    </div>
  )
}
