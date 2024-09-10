"use client"

import { useEffect, useState } from "react";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { createAccount, loginWithEmailAndPassword, useIsAuthenticated } from "./firebaseConfig";

export default function Home() {
  const [displayCreateAccount, setDisplayCreateAccount] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const isAuthenticated = useIsAuthenticated();
  if(isAuthenticated) {
    return(
      <Box display="flex" height="90vh" alignItems="center" justifyContent="center">
        <Typography>Success!</Typography>
      </Box>
    )
  }

  const handleOnClickGoBack = () => {
    setEmail('');
    setPassword('');
    setDisplayCreateAccount(false);
  }

  const handleOnClickCreateAccount = () => {
    setEmail('');
    setPassword('');
    setDisplayCreateAccount(true);
  }

  const loginComponent = () =>
    <>
      <Typography>Google Login Integration</Typography>
      <TextField label="E-mail" value={email} onChange={handleChangeEmail}></TextField>
      <TextField label="Password" value={password} onChange={handleChangePassword}></TextField>
      {error ? <Typography color="red">{error.code}</Typography> : null}
      <Button variant="contained" onClick={() => loginWithEmailAndPassword(email, password, setError)}>Login</Button>
      <Button onClick={handleOnClickCreateAccount}>Create account</Button>
    </>
  
  const createAccountComponent = () =>
    <>
      <Typography>New Account</Typography>
      <TextField label="E-mail" value={email} onChange={handleChangeEmail}></TextField>
      <TextField label="Password" value={password} onChange={handleChangePassword}></TextField>
      {error ? <Typography color="red">{error.code}</Typography> : null}
      <Button variant="contained" onClick={() => createAccount(email, password, setError)}>Create</Button>
      <Button onClick={handleOnClickGoBack}>Go back</Button>
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
