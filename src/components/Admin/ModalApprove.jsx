import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { writeDataToDB } from '../../firebase'

const ModalApprove = ({ open, handleOpen, goodsItem, reset }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 4,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
    const handleSend = () => {
        writeDataToDB(goodsItem)
        handleOpen()
        reset()
    }

    useEffect(() => {
    }, [])
    // const { title, description, price } = goodsItem

    return (
        <Modal
            open={open}
            onClose={handleOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {goodsItem ? (
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Check info of uploading item and push SEND to upoad to DB
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Title: {goodsItem.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Description: {goodsItem.description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Price:  {goodsItem.price}
                    </Typography>
                    <Button sx={{ float: 'right' }} onClick={handleSend}>
                        Send
                    </Button>
                </Box>
            ) : null}
        </Modal>
    )
}

export { ModalApprove }