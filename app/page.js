import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display="flex" height="90vh" alignItems="center" justifyContent="center">
      <Card>
        <Box display="flex" flexDirection="column" m={2}>
          <Stack spacing={2}>
          <Typography align="center">
            Google Login Integration
          </Typography>
          <TextField label="E-mail"></TextField>
          <TextField label="Password"></TextField>
          <Button variant="contained">Login</Button>
          <Button>Create account</Button>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
}
