import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams,Link } from 'react-router-dom';

import axios from 'axios'



const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const { id } = useParams();
    let history = useHistory();
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [taskdate, settaskdate] = useState('');
    const classes = useStyles();
  

    useEffect(() => {
        
      
    }, [])
    
    const update = () => {
        
        let item ={
            title:title,
            description:description,
            taskdate:taskdate
        }
        let token = localStorage.getItem('token')

        axios.put(`http://localhost:6009/${id}`, item,{ headers:{'x-access-token':token}}).then((res) => {
        })
        // axios.put(`http://localhost:6009/${id}`, item,)
        history.push('/table')
    }


   return (
       <div className='container'>
        <FormGroup classtitle={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
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
                
                <Button variant="contained" color="primary" onClick={update} type='submit'>Add User</Button>
            </FormControl>
        </FormGroup>
        </div>
    )
}

export default EditUser;