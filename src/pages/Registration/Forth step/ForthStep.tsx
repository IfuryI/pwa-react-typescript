import './ForthStep.css'
import { Button, FormHelperText } from '@mui/material'
import { type ChangeEvent, useEffect, useState } from 'react'
import { type User } from '../../../models/user'
import { ImageCropper } from './ImageCropper/ImageCropper'
export interface ForthStepProps {
  user: User
  photoChange: (photo: File) => void
}

export const ForthStep = ({ user, photoChange }: ForthStepProps): JSX.Element => {
  const [image, setImage] = useState<File | null>(user.photo)
  const [imageSizeError, setImageSizeError] = useState(false)
  const [test, setTest] = useState('')
  const [cropVisible, setCropVisible] = useState(false)
  const addPhoto = (): void => {
    document.getElementById('photo-upload')?.click()
  }

  const photoReader = (photo: File): FileReader => {
    const reader = new FileReader()
    reader.readAsDataURL(photo)
    return reader
  }

  useEffect(() => {
    const img = document.getElementById('img')
    if ((image != null) && !imageSizeError) {
      const reader = new FileReader()
      reader.onloadend = () => {
        img?.setAttribute('src', reader.result as string)
      }
      reader.readAsDataURL(image)
    }
    return () => {}
  }, [image, imageSizeError])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if ((e.target.files != null) /* && (e.target.files[0] ?? false) */) {
      const oversize = (e.target.files[0].size / (1024 * 1024)) > 20
      setImageSizeError(oversize)
      if (!oversize) {
        openCrop(e.target.files[0])
      }
    }
  }

  const openCrop = (photo: File): void => {
    const reader = photoReader(photo)
    reader.onloadend = () => {
      setTest(reader.result as string)
      setCropVisible(true)
    }
  }

  return <div className='container'>
        <h3>Upload a photo</h3>
        <img id='img' alt='photo' className={(image != null) ? '' : 'imageless'}/>
        <Button aria-label="add-photo"
            variant='outlined'
            onClick={addPhoto}>
            Add photo
        </Button>
        { imageSizeError && <FormHelperText error={true}>Up to 20MB files are allowed</FormHelperText> }

        { cropVisible && <ImageCropper image={test} acceptImage={(blob) => {
          const file = new File([blob], 'avatar')
          photoChange(file)
          setImage(file)
          setCropVisible(false);
          (document.getElementById('photo-upload') as HTMLInputElement).value = ''
        }}/>}

        <input id='photo-upload'
            className='hidden-input'
            type="file"
            accept='.jpeg,.png'
            name=""
            onChange={handleFileChange}
        />
    </div>
}
