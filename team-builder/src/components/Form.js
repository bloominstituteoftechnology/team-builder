
// - [ ] In `Form.js` build out your markup.
// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",

    backgroundPosition: "cover",
    height: "100vh"
  },
  paper: {
    width: "50%",
    marginTop: "4%",
    marginBottom: "4%",
    padding: "1%",
    backgroundColor: "#ADD8E6",
    position: "relative",
    boxSizing: "border-box"
  },
  paperItem: {
    color: "white",
    marginTop: "4%",
    marginBottom: "3%",
    borderColor: "white",
    boxSizing: "border-box"
  },
  topText: {
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box"
  },
  formGrid: {
    flexFlow: "column wrap",
    alignItems: "center",
    boxSizing: "border-box"
  },
  makeTruck: {
    flexFlow: "column wrap",
    alignItems: "center",
    boxSizing: "border-box"
  }
});

const initialValues = {
  name: "",
  email: "",
  role: "",
  image: ""
};

const UserForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      setValues({ ...values, image: reader });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h4"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Add Team Member
            </Typography>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <Button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{
                    display: "none"
                  }}
                />
                <p
                  onClick={() => imageUploader.current.click()}
                  ref={uploadedImage}
                >
                  Upload Profile Picture
                </p>
              </Button>

              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="email"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
              />

              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Role"
                name="role"
                value={values.role}
                onChange={handleChange}
                autoComplete="off"
              />

              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="input"
              >
                Join the Team!
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default UserForm;
