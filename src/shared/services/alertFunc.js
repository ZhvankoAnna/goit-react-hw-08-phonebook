import { Alert } from "@mui/material";

export const alertFunc = ({children}) => {
    return <Alert severity="error">{children}</Alert>
}