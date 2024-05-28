import React, { useState } from 'react';
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";


export default  function SimpleMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        console.log(event)
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id={"simple-menu"}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout </MenuItem>
            </Menu>

        </div>
    )

}
