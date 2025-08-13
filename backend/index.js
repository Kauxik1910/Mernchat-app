import express from 'express';
import chats from './data.js'; // Importing the chat data   
import dotenv from 'dotenv';       
dotenv.config(); // Load environment variables from .env file  

const app= express();
const port=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('API is running...');
});

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

app.get('/api/chat', (req, res) => {
    res.json(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const chat = chats.find(chat => chat._id === req.params.id);
    if (chat) {
        res.json(chat);
    } else {
        res.status(404).send({ message: 'Chat not found' });
    }
});