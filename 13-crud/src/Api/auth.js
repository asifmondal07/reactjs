export class Service{

    async signup(name, email, password) {
        try {
            const res = await fetch('http://localhost:8000/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            
            const data= await res.json();

            if (!res.ok) {
                // 🔥 Attach backend error message to the thrown error
                const error = new Error(data.message || 'Failed to signup');
                error.response = { data }; // Simulate Axios-style error object
                throw error;
            }

            return data;
            
        } catch (error) {
            console.log("signup :: ", error);
            return null;
        }
    }

    async login(email, password) {
        try {
            const res = await fetch('http://localhost:8000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) throw new Error('Failed to login');
            return await res.json();
        } catch (error) {
            console.log("login :: ", error);
            return null;
        }
    }

    async logout(token){
       try {
        const headers = {
            'Accept': 'application/json',
          };
          if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const res=await fetch('http://localhost:8000/user/logout', {
            method: 'POST', // or 'GET' if that's how your API works
            headers: headers,
          })
          return res.json()
       } catch (error) {
        console.log("logout :: ", error);
        
       }
    }
}   

const authService=new Service()
export default authService