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
            if (!res.ok) throw new Error('Failed to signup');
            return await res.json();
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

    async logout(){
       try {
        const res=await fetch('http://localhost:8000/user/logout', {
            method: 'POST', // or 'GET' if that's how your API works
          })
          return res.json()
       } catch (error) {
        console.log("logout :: ", error);
        
       }
    }
}   

const authService=new Service()
export default authService