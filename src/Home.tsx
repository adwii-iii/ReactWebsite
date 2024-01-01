import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgray',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Home() {
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: 4 }}>
                <Grid xs={5.5}>
                    <Item>
                        <Container maxWidth="xl" sx={{ mt: 8, mb: 5 }}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{ fontFamily: 'monospace', fontWeight: 700, mb: 4, color: 'black' }}
                            >
                                Welcome to the (Unofficial) BSC Year 2 Semester 2 Portal
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mb: 4, fontFamily: 'monospace' }}>
                                Explore teaching timetables, resources, and more!
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ fontFamily: 'monospace' }}>
                                <Link to="/timetables" style={{ textDecoration: 'none' }}>
                                    View Teaching Timetables
                                </Link>
                            </Typography>
                        </Container>
                    </Item>
                </Grid>

                <Grid xs={5.5}>
                    <Item>
                        <Container maxWidth="xl" sx={{ mt: 8, mb: 5 }}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{ fontFamily: 'monospace', fontWeight: 700, mb: 4, color: 'black' }}
                            >
                                Timeline of the Website Development
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ mb: 4, fontFamily: 'monospace' }}>
                                Explore teaching timetables, resources, and more!
                            </Typography>
                            <Typography variant="body1" align="center" sx={{ fontFamily: 'monospace' }}>
                                <Link to="/timetables" style={{ textDecoration: 'none' }}>
                                    View Teaching Timetables
                                </Link>
                            </Typography>
                        </Container>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;