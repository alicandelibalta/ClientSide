// Login logout işlemleri buradan yapılacak. 

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


export const loginUser = async (email, password) => {
    const response = await fetch(`http://localhost:4000/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
};

export const getUserProfile = async (token) => {
    const response = await fetch(`http://localhost:4000/api/user/profile`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch profile');
    }

    return response.json();
};



