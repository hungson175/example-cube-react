import {FormControl, FormHelperText, Input, InputLabel} from "@mui/material";

export default function SimpleFormControl() {
    return (<FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input type="email"
               id={"my-input"}
               autoComplete={"email"}
               aria-describedby={"my-helper-text"}
        />
        <FormHelperText id={"my-helper-text"}> We'll never share your email.</FormHelperText>
    </FormControl>)
}