import React, { useState } from 'react'

import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { bytesToSize } from '../../helpers'


const FilePreview = ({ file, removeImages }) => {
    const [image, setImg] = useState('')


    const reader = new FileReader()
    reader.onload = e => { setImg(e.target.result) }

    reader.readAsDataURL(file)

    return (
        <ImageListItem >
            <img
                style={{ width: 180, objectFit: 'contain' }}
                src={image}
                alt={file.name}
                loading="lazy"
            />
            <ImageListItemBar
                id="progress-bar"
                title={file.name}
                subtitle={bytesToSize(file.size)}
                sx={{ justifyContent: 'center' }}
                actionIcon={
                    <IconButton
                        onClick={() => removeImages(file.name)}
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    >
                        <CloseIcon />
                    </IconButton>
                }
            />
        </ImageListItem>)
}
export { FilePreview }