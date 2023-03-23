import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Cropper, { type Area } from 'react-easy-crop'
import { getUrl } from './utils'
import styles from './ImageCropper.module.scss'

export interface ImageCropperProps {
  image: string
  title: string
  acceptImage: (blobs: [string, string]) => void
}

export const ImageCropper = ({ image, acceptImage, title }: ImageCropperProps): JSX.Element => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [area, setArea] = useState<Area | null>(null)

  const [profilePhotoBlob, setProfilePhotoBlob] = useState<string | null>(null)

  const [avatarPhotoBlob, setAvatarPhotoBlob] = useState<string | null>(null)

  const [step, setStep] = useState<'profile' | 'avatar'>('profile')

  useEffect(() => {
    /**
     * After selecting profile photo
     * Go to avatar photo picker
     */
    if (profilePhotoBlob !== null) {
      resetCropSettings()
      setStep('avatar')
    }
  }, [profilePhotoBlob])

  useEffect(() => {
    if (avatarPhotoBlob !== null && profilePhotoBlob !== null) {
      /**
       * When we selects progile and avatar photo - exit picker an save images
       */
      acceptImage([profilePhotoBlob, avatarPhotoBlob])
    }
  }, [avatarPhotoBlob])

  const applyAreaSelection = (): void => {
    if (area === null) {
      return
    }

    void (async () => {
      const str = await getUrl(image, area)
      if (str !== undefined) {
        if (step === 'profile') {
          setProfilePhotoBlob(str)
        } else {
          setAvatarPhotoBlob(str)
        }
      }
    })()
  }

  const resetCropSettings = (): void => {
    setArea(null)
    setX(0)
    setY(0)
    setZoom(1)
  }

  return <div className={styles.cropWrapper}>
    {step === 'profile' &&
      <>
        <h3 className={styles.title}>Profile photo</h3>
        <Cropper
          image={image}
          crop={{ x, y }}
          zoom={zoom}
          aspect={3/5}
          cropShape="rect"
          showGrid={true}
          onCropChange={({ x, y }) => { setX(x); setY(y) }}
          onCropComplete={(e, i) => { setArea(i) }}
          onZoomChange={(zoom) => { setZoom(zoom) }}
        />
        <Button variant="contained" className={styles.acceptCropBtn} onClick={applyAreaSelection}>
          Confirm and pick avatar
        </Button></>
    }
    {step === 'avatar' &&
      <>
        <h3 className={styles.title}>Avatar photo</h3>
        <Cropper
          image={image}
          crop={{ x, y }}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onCropChange={({ x, y }) => { setX(x); setY(y) }}
          onCropComplete={(e, i) => { setArea(i) }}
          onZoomChange={(zoom) => { setZoom(zoom) }}
        />
        <Button variant="contained" className={styles.acceptCropBtn} onClick={applyAreaSelection}>
          Confirm and proceed
        </Button></>
    }

  </div>
}
