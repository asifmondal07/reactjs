export class Service {

    async createPost(title, content, image) {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('image', image);

            const res = await fetch('http://localhost:8000/blog/create', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) throw new Error('Failed to create post');
            return await res.json();
        } catch (error) {
            console.log("createPost :: ", error);
            return null;
        }
    }

    async getAllPost(page=1, limit = 5, sort = '') {
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


}

const ApiService = new Service();
export default ApiService;
