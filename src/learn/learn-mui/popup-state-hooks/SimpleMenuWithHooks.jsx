import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import React from "react";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {usePopupState} from "material-ui-popup-state/hooks";

export default function SimpleMenuWithHooks() {
    const handleItemClick = (popupState, item) => {
        console.log("Item: ", item)
        popupState.close()
    }
    // Using usePopupState hook
    const popupState = usePopupState({
        popupId: 'demo-popup-menu',
        variant: 'popover',
    })

    return (
        <div>
            <Button variant="contained" {...bindTrigger(popupState)}>
                Open Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={(event) => handleItemClick(popupState, "p")}>Profile</MenuItem>
                <MenuItem onClick={(event) => handleItemClick(popupState, "a")}>My account</MenuItem>
                <MenuItem onClick={(event) => handleItemClick(popupState, "l")}>Logout</MenuItem>
            </Menu>
        </div>
    )

    // Using PopupState component
    // return (
    //     <PopupState
    //         variant="popover"
    //         popupId="demo-popup-menu"
    //         disableAutoFocus={true}
    //     >
    //         {(popupState) => (
    //             <React.Fragment>
    //                 <Button variant="contained" {...bindTrigger(popupState)}>
    //                     Open Menu
    //                 </Button>
    //                 <Menu {...bindMenu(popupState)}>
    //                     <MenuItem onClick={(event) => handleItemClick(popupState, "p")}>Profile</MenuItem>
    //                     <MenuItem onClick={(event) => handleItemClick(popupState, "a")}>My account</MenuItem>
    //                     <MenuItem onClick={(event) => handleItemClick(popupState, "l")}>Logout</MenuItem>
    //                 </Menu>
    //
    //             </React.Fragment>
    //         )}
    //
    //     </PopupState>
    // )
}