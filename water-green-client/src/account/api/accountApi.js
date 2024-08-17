// Login logout işlemleri buradan yapılacak. 
// src/api/registerUser.js

export const registerUser = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:4000/api/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
  
      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    } finally {
      setSubmitting(false);
    }
  };
  


