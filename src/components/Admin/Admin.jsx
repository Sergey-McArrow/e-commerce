import React, { useContext, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"

import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { FilePreview } from './FilePreview'
import { uploader } from '../../firebase'

import { Context } from '../../context'


const Admin = () => {
    const { setImages, images } = useContext(Context)
    const { register, handleSubmit } = useForm()

    const filePicker = useRef(null)

    const handlePick = () => {
        filePicker.current.click()
    }

    const handleUpload = e => {
        setImages(Array.from(e.target.files))
    }
    // TODO: function adding path of img to goodItem & add it to db 
    const onSubmit = data => console.log(data)

    useEffect(() => { }, [])
    return (

        <Container className='uploadContent' >
            <Box className="uploadContent_actions" sx={{
                display: ' flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                p: '2rem',
                w: 1 / 1
            }}>
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
                    type="submit"
                    name="action"
                    variant='outlined'
                    onClick={handlePick}>
                    Select
                </Button>
                {/* TODO: delete temporary button */}
                <Button
                    id="upload"
                    type="submit"
                    name="action"
                    variant='contained'
                    onClick={() => uploader(images)}>
                    Upload
                </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 5, pb: 5 }}>
                <Paper elevation={6} component='form'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 1 / 3,
                        px: '2rem',
                        '& .MuiTextField-root': { width: '25ch' },
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                    <Button
                        type='submit'
                        variant='contained'
                        onClick={() => uploader(images)}>
                        Send
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