import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { db } from '../firebase'; 
import { useParams } from 'react-router-dom'; 
import { doc, getDoc,updateDoc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import FileBase64 from 'react-filebase64';
import './style.css';

const User = () => {
    const {id} =useParams();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(userData);

  useEffect(() => {
    const getUser=async()=>{

        const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setUserData(docSnap.data())
       
      } else {
        
        console.log("No such document!");
        toast('no user found')
      }
    }
    getUser()
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave =async () => {

    const docRef = doc(db, "users", id);
    try {
      await updateDoc(docRef, editedData); 
      setIsEditing(false);
      toast('User data updated successfully');
      
      setUserData(editedData);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  

    


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div>
      

      <Form className="EditForm">
      <h2 className='Profileheading'>User Profile</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={isEditing ? editedData.userName : userData.userName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={isEditing ? editedData.email : userData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={isEditing ? editedData.Password : userData.Password}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={isEditing ? editedData.dateOfBirth : userData.dateOfBirth}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <div className="form-group mb-3">
        <label className="form-control-placeholder" htmlFor="profileUpload">Profile Photo</label>
         <FileBase64
        type='file'
                                
            value={editedData.uploadProfile}
               onDone={({base64})=>{
                 setEditedData((prevVal)=>{
             return {...prevVal,uploadProfile:base64}
                })
               } }
                  required />
               </div>
        {isEditing ? (
          <Button className='save-btn' onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={handleEdit}>Edit Profile</Button>
        )}
      </Form>
    </div>
  );
};

export default User;
