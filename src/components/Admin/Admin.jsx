import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"

import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { FilePreview } from './FilePreview'
import { uploader } from '../../firebase'

import { ModalApprove } from './ModalApprove'


const Admin = () => {
    const [images, setImages] = useState([])
    const [imageURl, setUrl] = useState('')
    const [goodsItem, setgoodsItem] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [buttonState, setButtonState] = useState(true)

    const { register, handleSubmit, reset } = useForm()

    const filePicker = useRef(null)

    const handlePick = () => {
        filePicker.current.click()
    }

    const removeImages = (name) => {
        setImages(images.filter(img => img.name !== name))
    }

    const handleUploadImades = e => {
        setImages(Array.from(e.target.files))
    }

    const getImageURL = (url) => setUrl(url)

    const handleUploaderImadges = () => {
        uploader(images, getImageURL)
    }

    const handleOpen = () => { setIsOpenModal(prev => !prev) }

    const onSubmit = data => {
        setgoodsItem(data)
        setButtonState(prev => !prev)
    }
    const handleUploadToDB = () => {
        setIsOpenModal(true)
        setButtonState(prev => !prev)
        setUrl('')

    }


    useEffect(() => {
    }, [])
    return (

        <Container className='uploadContent' >
            {goodsItem ? (<ModalApprove open={isOpenModal} handleOpen={handleOpen} goodsItem={goodsItem} reset={reset} />
            ) : null}
            <Box sx={{ display: 'flex', gap: 5, p: '2rem' }}>

                <Paper elevation={6} component='form'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        width: 1 / 3,
                        p: '2rem',
                        '& .MuiTextField-root': { width: '25ch' },
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexDirection: 'column' }}>
                        <Typography>
                            Select files to add
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            <input
                                onChange={handleUploadImades}
                                style={{ display: 'none' }}
                                type="file"
                                id="file"
                                multiple
                                ref={filePicker}
                                accept=".jpg,.jpeg,.png,.gif,.svg,.ico,.bmp,.dib,.tif,.tiff" />
                            <Button
                                id="open"
                                name="action"
                                variant='outlined'
                                sx={{ width: '10rem' }}
                                onClick={handlePick}>
                                Select
                            </Button>
                            <Button
                                sx={{ width: '10rem' }}
                                variant='contained'
                                onClick={handleUploaderImadges}>
                                Upload image
                            </Button>
                        </Box>
                    </Box>
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        margin="normal"
                        helperText=" Enter Title here"
                        {...register("title", { required: true, maxLength: 20 })}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        margin="normal"
                        helperText="Enter Description here"
                        {...register("description", { required: true, maxLength: 50 })}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Price"
                        margin="normal"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        helperText=" Enter Price here"
                        type='number'
                        {...register("price", { required: true, maxLength: 20 })}
                    />
                    <TextField
                        required
                        value={imageURl}
                        id="outlined-required"
                        label="SRC"
                        margin="normal"
                        helperText="SRC"
                        {...register("src", { required: true })}
                    />
                    <Box sx={{
                        display: 'flex',
                        gap: '1rem'
                    }}>                        <Button
                        sx={{ width: '10rem' }}
                        variant='contained'
                        type='submit'
                        onClick={handleSubmit(onSubmit)}>
                            Submit
                        </Button>
                        <Button
                            disabled={buttonState}
                            sx={{ width: '10rem' }}
                            variant='outlined'
                            onClick={handleUploadToDB}>
                            Upload item
                        </Button>
                    </Box>
                </Paper>
                <Box sx={{ width: 2 / 3 }}>

                    <Paper elevation={6}
                        sx={{
                            display: "flex",
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignContent: 'flex-start',
                            alignItems: 'center',
                            gap: '2rem',
                            p: '2rem',
                            minHeight: '50rem',
                            height: 1 / 1
                        }}>

                        {images.length ? (images.map(file => <FilePreview key={file.name} file={file} removeImages={removeImages} />)) : null}
                    </Paper>
                </Box>
            </Box >

        </Container >

    )
}

export { Admin }