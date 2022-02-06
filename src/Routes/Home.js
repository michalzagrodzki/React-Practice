import React from "react";
import { Grid, Container, Typography, Card, CardContent, CardActions, Button, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./../theme"

export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent:'center',
          alignItems: 'center',
          height: "100vh",
          backgroundColor: 'primary.dark',
        }}
      >
        <Grid 
          container 
          spacing={0}
          alignItems="center"
          maxWidth={1600}
        >
          <Grid item md={4}>
            <Container>
              <Typography variant="h4" component="h1" gutterBottom>
                React exercises
              </Typography>
              <Typography variant="h6" component="h4" gutterBottom>
                Dive into react exerciess. See different approaches, use of libraries and methods.
              </Typography>
            </Container>
          </Grid>
          <Grid item md={8}>
            <Container>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Chat mockup
                      </Typography>
                      <Typography variant="body2">
                        Structure for mockup chat with communication between components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Chat mockup
                      </Typography>
                      <Typography variant="body2">
                        Structure for mockup chat with communication between components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Chat mockup
                      </Typography>
                      <Typography variant="body2">
                        Structure for mockup chat with communication between components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Chat mockup
                      </Typography>
                      <Typography variant="body2">
                        Structure for mockup chat with communication between components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Chat mockup
                      </Typography>
                      <Typography variant="body2">
                        Structure for mockup chat with communication between components
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}