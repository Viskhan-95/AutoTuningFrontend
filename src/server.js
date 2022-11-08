const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:4000' 
} else {
  serverUrl = 'https://auto-backend.onrender.com'; 
}