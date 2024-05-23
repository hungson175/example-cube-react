import {Box, Container, Link, Typography} from "@mui/material";
import ProTip from './ProTip';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright (C) '}
            <Link corlor="inherit" href="https://mui.com">
                MUI Website
            </Link>
        </Typography>
    )
}

export default function CreateReactApp() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h3" component="h1" sx={{mb: 4}}>
                    Material-UI: Create React App example
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{mb: 2}}>
                    Enable source maps in your TypeScript configuration (tsconfig.json) to make debugging easier. Source maps map your transpiled code back to the original TypeScript source code, allowing you to see the original code in the browser's DevTools.
                </Typography>

                <ProTip/>
                <Copyright/>
            </Box>
        </Container>
    )
}