import './ForthStep.css';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../../models/user';
import { FormHelperText } from '@mui/material';
import { ImageCropper } from './ImageCropper/ImageCropper';
export interface ForthStepProps {
    user: User;
    photoChange: (photo: File) => void;
}

export const ForthStep = ({user, photoChange}: ForthStepProps): JSX.Element => {
    const [image] = useState<File | null>(user.photo);
    const [imageSizeError, setImageSizeError] = useState(false);
    const [test, setTest ] = useState('');
    const [cropVisible, setCropVisible] = useState(false);
    const addPhoto = () => {
        document.getElementById('photo-upload')?.click()
    }

    const photoReader = (photo: File): FileReader => {
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        return reader;
    }

    useEffect(() => {
        const img = document.getElementById('img');
        if (user.photo && !imageSizeError) {
            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                img?.setAttribute('src', reader.result);
            };
            reader.readAsDataURL(user.photo);
        }
        return () => {};
    }, [user, imageSizeError])

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const oversize = (e.target.files[0].size / (1024 * 1024)) > 20;
            setImageSizeError(oversize)
            if (!oversize) {
                openCrop(e.target.files[0]);
            }
        }
    }

    const openCrop = (photo: File) => {
        const reader = photoReader(photo);
        reader.onloadend = () => {
            //@ts-ignore
            setTest(reader.result);
            setCropVisible(true);
        };
    }
    
    return <div className='container'>
        <h3>Upload a photo</h3>
        <img id='img' alt='photo' className={image ? '' : 'imageless'}/>
        <Button aria-label="add-photo"
            variant='outlined'
            onClick={addPhoto}>
            Add photo
        </Button>
        { imageSizeError && <FormHelperText error={true}>Up to 20MB files are allowed</FormHelperText> }

        { cropVisible && <ImageCropper image={test} acceptImage={(blob) => {
            photoChange(new File([blob], 'avatar'));
            setCropVisible(false);
            (document.getElementById('photo-upload') as HTMLInputElement).value = '';
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