import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
// import { useHistory,useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory } from 'react-router-dom';






const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})




const AddUser = () => {
    // let history = useHistory();
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [taskdate, settaskdate] = useState('');
    const classes = useStyles();
    let history = useHistory()
    const postData = () => {
        let item ={
            title:title,
            description:description,
            taskdate:taskdate
        }
        axios.post('http://localhost:6009/all', item)
        history.push('/table')
    }

   
    return (
        <div className='container'>
        <FormGroup classtitle={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">title</InputLabel>
                <Input placeholder='title' onChange={(e) => settitle(e.target.value)} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">description</InputLabel>
                <Input placeholder='description' onChange={(e) => setdescription(e.target.value)} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">taskdate</InputLabel>
                <Input placeholder='taskdate' onChange={(e) => settaskdate(e.target.value)} id="my-input"/>
            </FormControl>
           <FormControl>
                
                <Button variant="contained" color="primary" onClick={postData} type='submit'>Add User</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default AddUser;