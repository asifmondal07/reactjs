
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
              
            console.log("RESPONSE:", res);
            
            if (!res.ok) throw new Error('Failed to create post');
            const json = await res.json();

            // console.log("JSON RESPONSE:", json);
            return json;

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

    async getAllPost(page=1, limit = 10, sort = 'new') {
        const queryParams = new URLSearchParams({
            page,
            limit,
        });
        if (sort) queryParams.append('sort', sort);

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
            if (!res.ok) throw new Error('Failed to delete post');
            return await res.json();
        } catch (error) {
            console.log("deletePost :: ", error);
            return null;
        }
    }

    async editPost(id, data, token) {
        
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
                method: 'PATCH',
                headers,
                body: formData,
              });
              
            console.log("RESPONSE:", res);
            
            if (!res.ok) return ('Failed to edit post : ',res.error);
            const json = await res.json();

            // console.log("JSON RESPONSE:", json);
            return json;
            
        }
        
        
        async deleteImage(id, token, index) {
            const imageID = [index];
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json', // Add this
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
                method: 'PATCH',
                headers,
                body: JSON.stringify(body) // Must be stringified
            });
        
            if (!res.ok) {
                console.error('Failed to delete file:', res.statusText);
                return;
            }
        
            const json = await res.json();
            return json;
        }
        



}

const ApiService = new Service();
export default ApiService;
