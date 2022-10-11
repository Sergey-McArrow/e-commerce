import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"

import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { FilePreview } from './FilePreview'
import { uploader } from '../../firebase'

import { Context } from '../../context'
import { ModalApprove } from './ModalApprove'


const Admin = () => {
    const { setImages, images } = useContext(Context)
    const [imageURl, setUrl] = useState('')
    const [goodsItem, setgoodsItem] = useState(null)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [buttonState, setButtonState] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const filePicker = useRef(null)

    const handlePick = () => {
        filePicker.current.click()
    }

    const handleUpload = e => {
        setImages(Array.from(e.target.files))
        console.log(images)
    }

    // TODO: function adding path of img to goodItem & add it to db 
    const uploaderHandler = () => {
        uploader(images, getImageURL)
        setIsOpenModal(!isOpenModal)
        console.log(isOpenModal)
    }

    const handleOpen = () => { setIsOpenModal(!isOpenModal) }

    const onSubmit = data => {
        // return new Promise((resolve) => {
        //     resolve(data)
        // }).then(
        setgoodsItem(data)
        // )
    }

    const getImageURL = (url) => {
        setUrl(url)
        setButtonState(!buttonState)
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
                        px: '2rem',
                        '& .MuiTextField-root': { width: '25ch' },
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <Typography>
                            Select files to add
                        </Typography>
                        <input
                            onChange={handleUpload}
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
                            onClick={handlePick}>
                            Select
                        </Button>
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

                    <Button
                        // disabled={buttonState}
                        type='submit'
                        variant='contained'
                        onClick={uploaderHandler}>
                        Upload image
                    </Button>
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
                            minHeight: '50rem'
                        }}>

                        {images.length ? (images.map(file => <FilePreview key={file.name} file={file} />)) : null}
                    </Paper>
                </Box>
            </Box>

        </Container >

    )
}

export { Admin }