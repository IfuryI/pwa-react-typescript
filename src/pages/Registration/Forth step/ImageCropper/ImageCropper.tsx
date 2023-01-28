import { Button } from "@mui/material";
import { useState } from "react";
import Cropper, { Area } from "react-easy-crop"
import { getUrl } from "./utils";
import './ImageCropper.css';

export interface ImageCropperProps {
    image: string;
    acceptImage: (blob: Blob) => void
}

export const ImageCropper = ({ image, acceptImage }: ImageCropperProps): JSX.Element => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [area, setArea] = useState<Area | null>(null);
    return <div className="crop-wrapper">
        <Cropper
            image={image}
            crop={{ x, y }}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={({ x, y }) => {
                setX(x);
                setY(y);
            }}
            onCropComplete={(e, i) => {
                console.log(e, i);
                setArea(i);
            }}
            onZoomChange={(zoom) => {
                setZoom(zoom)
            }}
        />
        <Button variant="contained" className="accept-crop-btn" onClick={() => {
            if (area) {
                (async () => {
                    const str = await getUrl(image, area);
                    if (str) {

                        await fetch(str)
                        .then(res => res.blob())
                        .then((blob) => {
                            acceptImage(blob);
                        })
                    }
                    console.log(str);
                })();
            }
        }}>Save</Button>
    </div>;
}