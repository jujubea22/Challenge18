const express =require('express');
const db =require('./config/connection');
const routes =require('./routes');
const port =process.env.port || 3001