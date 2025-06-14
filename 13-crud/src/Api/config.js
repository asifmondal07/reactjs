import { token1234 } from "../key/key";

export class Service {

    async createPost(data, token) {
        // console.log("createPost called with:", { data, token });
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);
            

            if (data.image && data.image.length > 0) {
                for (let i = 0; i < data.image.length; i++) {
                    formData.append("coverImage", data.image[i]);
                }
            }
            

            const headers = {
                'Accept': 'application/json',
              };
              if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
              
              const res = await fetch('http://localhost:8000/blog/create', {
                method: 'POST',
                headers,
                body: formData,
              });
            if (res.status === 403 || res.status === 401) {
                localStorage.removeItem(token1234);
                localStorage.removeItem('userData');
                alert("Invalid token! Please log in again.");
                window.location.href = '/login'; // 🔁 Redirect to login
                throw new Error("Invalid token! Please log in again.");
            }
            
            const result = await res.json();
            // console.log("JSON RESPONSE:", json);
            return result;

        } catch (error) {
            console.log("createPost :: ", error);
            return null;
        }
    }

    async getPostById(id,token) {
        try {
            const headers = {
                'Accept': 'application/json',
              };
              if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const res = await fetch(`http://localhost:8000/blog/${id}`, {
                method: 'GET',
                headers: headers,
            });
            if (!res.ok) throw new Error('Failed to fetch data');
            return await res.json();
        } catch (error) {
            console.log("getPost :: ", error);
            return null;
        }
    }

    async getAllPost(page, limit, sort) {
        const queryParams = new URLSearchParams({
            page: String(page),
            limit: String(limit),
            sort: String(sort)
          })

        const url = `http://localhost:8000/blog/?${queryParams.toString()}`;
        
        console.log(url); // Log the constructed URL

        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            if (!res.ok) throw new Error('Failed to fetch data');
            return await res.json();
        } catch (error) {
            console.log("getPost :: ", error);
            return null;
        }
    }

    async deletePost(id,token) {
        try {
            const headers = {
                'Accept': 'application/json',
              };
              if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const res = await fetch(`http://localhost:8000/blog/${id}`, {
                method: 'DELETE',
                headers: headers,
            });

            if (res.status === 403 || res.status === 401) {
                localStorage.removeItem(token1234);
                localStorage.removeItem('userData');
                alert("Invalid token! Please log in again.");
                window.location.href = '/login'; // 🔁 Redirect to login
                throw new Error("Invalid token! Please log in again.");
            }
            
            const result= await res.json();

            return result;
        } catch (error) {
            console.log("deletePost :: ", error);
            
            if("Invalid token! Please log in again."=== error.message){
                localStorage.removeItem(token1234)
                localStorage.removeItem('userData')
                alert("Invalid token! Please log in again.");
                window.location.href='/login'
            }else{
                alert(error.message || 'Something went wrong')
            }
            return null;
        }
    }

    async editPost(id, data, token) {
        
            try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);

            if (data.image && data.image.length > 0) {
                for (let i = 0; i < data.image.length; i++) {
                    formData.append("coverImage", data.image[i]);
                }
            }

            const headers = {
                'Accept': 'application/json',
              };
              if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
              
              const res = await fetch(`http://localhost:8000/blog/${id}`, {
                method: 'PUT',
                headers,
                body: formData,
              });
            
            if (res.status === 403 || res.status === 401) {
                localStorage.removeItem(token1234);
                localStorage.removeItem('userData');
                alert("Invalid token! Please log in again.");
                window.location.href = '/login'; // 🔁 Redirect to login
                throw new Error("Invalid token! Please log in again.");
            }

              const json = await res.json();

                return json;

            } catch (error) {
                console.log("edit post :: ", error);
                return null;
            }
            
        }
        
        
        async deleteImage(id, token, index) {

            try {
                const imageID = [index];
                const headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json', 
                };
            
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
            
                const body = {
                    imageId: imageID
                };
            
                console.log("DELETE IMAGE ID:", id);
                console.log("DELETE IMAGE INDEX:", imageID);
            
                const res = await fetch(`http://localhost:8000/blog/${id}/image`, {
                    method: 'PUT',
                    headers,
                    body: JSON.stringify(body) // Must be stringified
                });
            
                if (res.status === 403 || res.status === 401) {
                    localStorage.removeItem(token1234);
                    localStorage.removeItem('userData');
                    alert("Invalid token! Please log in again.");
                    window.location.href = '/login'; // 🔁 Redirect to login
                    throw new Error("Invalid token! Please log in again.");
                }
            
                const result = await res.json();
                return result;
                
            } catch (error) {
                console.log("deleteImage :: ", error.message);
                return null;
                
            }
        }
        



}

const ApiService = new Service();
export default ApiService;
