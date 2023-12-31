import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
                                <ButtonGroup size="large" aria-label="large button group">
                                    <Link to="/timetables" style={{ textDecoration: 'none' }}>
                                        <Button key="one">TIMETABLES</Button>
                                    </Link>
                                    <Link to="/resources" style={{ textDecoration: 'none' }}>
                                        <Button key="two">RESOURCES</Button>
                                    </Link>
                                    <Link to="/tests" style={{ textDecoration: 'none' }}>
                                        <Button key="three">TESTS</Button>
                                    </Link>
                                </ButtonGroup>
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
                                sx={{ fontFamily: 'monospace', fontWeight: 700, mb: 4, color: 'black', fontSize: '3rem' }}
                            >
                                Essential Links
                            </Typography>

                            <Typography variant="body1" align="center" sx={{ fontFamily: 'monospace' }}>
                                <ButtonGroup size="large" aria-label="large button group" sx={{ mt: 2 }}>
                                    <Link to="https://portal.hw.ac.uk/" style={{ textDecoration: 'none' }}>
                                        <Button key="one">MYHWU</Button>
                                    </Link>
                                    <Link to="https://canvas.hw.ac.uk" style={{ textDecoration: 'none' }}>
                                        <Button key="two">CANVAS</Button>
                                    </Link>
                                    <Link to="https://gitlab-student.macs.hw.ac.uk/" style={{ textDecoration: 'none' }}>
                                        <Button key="three">GITLAB</Button>
                                    </Link>
                                </ButtonGroup>

                                <ButtonGroup size="large" aria-label="large button group" sx={{ mt: 3 }}>
                                    <Link to="https://github.com/" style={{ textDecoration: 'none' }}>
                                        <Button key="one">GITHUB</Button>
                                    </Link>
                                    <Link to="https://b.socrative.com/login/student/" style={{ textDecoration: 'none' }}>
                                        <Button key="two">SOCRATIVE</Button>
                                    </Link>
                                    <Link to="https://outlook.com" style={{ textDecoration: 'none' }}>
                                        <Button key="three">OUTLOOK</Button>
                                    </Link>
                                </ButtonGroup>
                            </Typography>
                        </Container>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;