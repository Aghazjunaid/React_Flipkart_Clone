import React from 'react'
import { Dialog, DialogContent} from '@material-ui/core'


function Login(props) {

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogContent>
                    <p>hello</p>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login
