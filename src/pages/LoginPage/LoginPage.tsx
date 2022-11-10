import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { loginUserFromDb, useAppDispatch } from '@/redux'

import { useForm } from '@/hooks'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { handleInputChange, email, password } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUserFromDb(email, password))
    navigate('/home')
  }

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' alignItems='center' justifyContent='center' sx={{ minHeight: '100vh' }}>
        <Grid item>
          <Paper elevation={5} sx={{ padding: '1.2rem', width: '40rem' }}>
            <Typography variant='h4' sx={{ textAlign: 'center' }}>
              Iniciar Sesión
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  name='email'
                  margin='normal'
                  label='Email'
                  type='email'
                  variant='outlined'
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
                <TextField
                  name='password'
                  label='Contraseña'
                  type='password'
                  variant='outlined'
                  onChange={handleInputChange}
                  fullWidth
                  required
                />
                <Button type='submit' variant='contained'>
                  Ingresar
                </Button>

                <Button variant='contained' onClick={() => navigate('/register')}>
                  Registrarse
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
