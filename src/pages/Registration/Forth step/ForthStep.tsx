import './ForthStep.css';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../../models/user';

export interface ForthStepProps {
    user: User;
    photoChange: (photo: File) => void;
}

export const ForthStep = ({user, photoChange}: ForthStepProps): JSX.Element => {
    const [image] = useState<File | null>(user.photo);
    const addPhoto = () => {
        document.getElementById('photo-upload')?.click()
    }

    useEffect(() => {
        const img = document.getElementById('img');
        if (user.photo) {
            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                img?.setAttribute('src', reader.result);
            };
            reader.readAsDataURL(user.photo);
        }
        return () => {};
    }, [user])

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const img = document.getElementById('img');
        const reader = new FileReader();
        reader.onloadend = () => {
            //@ts-ignore
            img?.setAttribute('src', reader.result);
        };
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            photoChange(e.target.files[0]);
        }
    }
    
    return <div className='container'>
        <h3>Upload a photo</h3>
        <img id='img' alt='photo' className={image ? '' : 'imageless'}/>
        <Button aria-label="add-photo"
            variant='outlined'
            onClick={addPhoto}    
        >
            Add photo
        </Button>

        <input id='photo-upload'
            className='hidden-input'
            type="file"
            name=""
            onChange={handleFileChange}
        />
    </div>
}