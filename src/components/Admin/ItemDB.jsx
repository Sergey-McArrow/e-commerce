import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import { Box, ImageListItemBar, ImageListItem, IconButton, Modal, TextField } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import PublishIcon from '@mui/icons-material/Publish'

import { removeGoodsItem, updateGoodsInfo } from '../../firebase'




const ItemDB = ({ item }) => {
    const [open, setOpen] = useState(false)

    const updatedItem = { ...item }
    const { register, handleSubmit, reset } = useForm()

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handlePriceChanged = (e) => {
        // e.preventDefault()
        // setEditedPrice(e.target.value)
    }

    const onSubmit = ({ title, price, description }) => {
        updatedItem.title = title
        updatedItem.price = price
        updatedItem.description = description
        updateItem()
    }

    //TODO: upd price, delete items
    const updateItem = () => {
        console.log(updatedItem)
        updateGoodsInfo(updatedItem, item)
        reset()
        handleClose()
    }

    const removeItemHandler = ({ title }) => {
        removeGoodsItem(title)
    }

    const DescriptionModal = () => {

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <TextField
                            required
                            placeholder={item.title}
                            id="outlined-required"
                            label="Title"
                            margin="normal"
                            {...register("title", { required: true, maxLength: 10 })}>
                        </TextField>
                    </Box>
                    <Box>
                        <TextField
                            required
                            placeholder={item.price}
                            id="outlined-required"
                            label="New price"
                            margin="normal"
                            {...register("price", { required: true, maxLength: 5 })}
                        >
                        </TextField>
                    </Box>
                    <Box>
                        <TextField
                            required
                            onChange={handlePriceChanged}
                            placeholder={item.description}
                            id="outlined-required"
                            label="New description"
                            margin="normal"
                            {...register("description", { required: true, maxLength: 50 })}
                        >
                            {item.price} $`
                        </TextField>
                        <IconButton type='submit'
                            onClick={handleSubmit(onSubmit)}>
                            <PublishIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Modal>
        )
    }

    return (
        <Box sx={{ width: 1 / 3 }}>
            {open && <DescriptionModal />}

            <ImageListItem sx={{ p: 2 }} >
                <IconButton sx={{ float: 'right' }} onClick={() => removeItemHandler(item)}> <CloseIcon /></IconButton>
                <img
                    src={item.src}
                    srcSet={item.src}
                    alt={item.title}
                    loading="lazy"
                    style={{ height: '20rem' }}
                />

                <ImageListItemBar
                    title={item.title}
                    actionIcon={
                        <IconButton onClick={handleOpen}>
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Box >

    )
}
export { ItemDB }