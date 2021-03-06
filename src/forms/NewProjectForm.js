import React, { useState } from 'react'
import API from '../API'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from "../layout/PrimarySearchAppBar"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import SaveIcon from '@material-ui/icons/Save';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';

import logo from "../images/logo.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Construction Manager
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewProjectForm() {

  const classes = useStyles();

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [client, setClient] = useState("")
  const [project_manager, setProject_manager] = useState("")
  const [site_manager, setSite_manager] = useState("")
  const [quantity_surveyor, setQuantity_surveyor] = useState("")
  const [start_date, setStart_date] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());


  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "construction_manager")
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/dziowkyij/image/upload", {
      method: 'POST',
      body: data
    }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }

  const submitForm = () => {
    setFormSubmitted(!formSubmitted)
  }

  return (
    <>
      {!formSubmitted
        ? <div>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}
                src={logo}
                alt="logo"
              >
              </Avatar>
              <Typography component="h1" variant="h5">
                Add New Project
        </Typography>
              <form className={classes.form} noValidate
                onSubmit={(e) => API.submitNewProject(e, {
                  name,
                  address,
                  image,
                  description,
                  client,
                  project_manager,
                  site_manager,
                  quantity_surveyor,
                  start_date,
                  end_date,
                }, submitForm)}>

                <Grid item xs={12}>
                  <TextField onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" className={classes.form}>
                    <Input type="file"
                      fullWidth
                      margin="dense"
                      disableUnderline
                      name="file"
                      placeholder="Upload an Image"
                      onChange={uploadImage}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  {loading ? (
                    <h3>Loading...</h3>
                  ) : (
                      <img src={image} style={{ width: '250px' }} alt="" />
                    )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="Address"
                    autoComplete="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>

                <br></br>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="Description"
                    autoComplete="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <br></br>
                <br></br>
                <Typography component="h6" variant="h6">
                  Contacts
        </Typography>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid item>
                    <EmailIcon />
                  </Grid>
                  <Grid item>

                    <TextField
                      required
                      fullWidth
                      id="Client"
                      label="Client"
                      name="Client"
                      autoComplete="Client"
                      value={client}
                      onChange={(e) => setClient(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid item>
                    <EmailIcon />
                  </Grid>
                  <Grid item>

                    <TextField
                      required
                      fullWidth
                      id="Project_manager"
                      label="Project Manager"
                      name="Project_manager"
                      autoComplete="Project_manager"
                      value={project_manager}
                      onChange={(e) => setProject_manager(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid item>
                    <EmailIcon />
                  </Grid>
                  <Grid item>

                    <TextField
                      required
                      fullWidth
                      id="Site_manager"
                      label="Site Manager"
                      name="Site_manager"
                      autoComplete="Site_manager"
                      value={site_manager}
                      onChange={(e) => setSite_manager(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <br></br>
                <Grid container spacing={1} alignItems="flex-end" >
                  <Grid item>
                    <EmailIcon />
                  </Grid>
                  <Grid item>

                    <TextField
                      required
                      fullWidth
                      id="quantity urveyor"
                      label="Quantity surveyor"
                      name="Quantity_surveyor"
                      autoComplete="quantity_surveyor"
                      value={quantity_surveyor}
                      onChange={(e) => setQuantity_surveyor(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <br></br>

                <br></br>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="date"
                    name="date"
                    variant="outlined"
                    required
                    fullWidth
                    id="datetime-local"
                    label="Start date"
                    autoFocus
                    type="date"
                    defaultValue={start_date}
                    className={classes.textField}
                    onChange={(e) => setStart_date(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <br></br>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="date"
                    name="date"
                    variant="outlined"
                    required
                    fullWidth
                    id="datetime-local"
                    label="End date"
                    autoFocus
                    type="date"
                    defaultValue={end_date}
                    className={classes.textField}
                    onChange={(e) => setEnd_date(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <br></br>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  value="create project"
                  startIcon={<SaveIcon />}
                >
                  Save
                 </Button>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </div>
        : <div>
          <PrimarySearchAppBar />
          <br></br>
          <br></br>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h5" component="h2">
              Project has been added to your Collection!
          </Typography>
          </Box>
          <br></br>
          <br></br>
          <br></br>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <Button variant="contained"
                color="primary"
              >
              BACK TO MY PROJECT
              </Button>
            </Link>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <Button variant="contained"
                color="secondary"
              >
                BACK TO HOME
            </Button>
            </Link>
          </Box>
        </div>

      }
    </>
  );
}