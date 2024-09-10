"use client"

import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [displayCreateAccount, setDisplayCreateAccount] = useState(false);

  const loginComponent = () =>
    <>
      <Typography>Google Login Integration</Typography>
      <TextField label="E-mail"></TextField>
      <TextField label="Password"></TextField>
      <Button variant="contained">Login</Button>
      <Button onClick={() => setDisplayCreateAccount(true)}>Create account</Button>
    </>
  
  const createAccountComponent = () =>
    <>
      <Typography>New Account</Typography>
      <TextField label="E-mail"></TextField>
      <TextField label="Password"></TextField>
      <Button variant="contained">Create</Button>
      <Button onClick={() => setDisplayCreateAccount(false)}>Go back</Button>
    </>

  return (
    <Box display="flex" height="90vh" alignItems="center" justifyContent="center">
      <Card>
        <Box display="flex" flexDirection="column" m={2}>
          <Stack spacing={2}>
            {displayCreateAccount
              ? createAccountComponent()
              : loginComponent()
            }
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
