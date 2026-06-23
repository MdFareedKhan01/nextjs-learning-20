import axios from "axios";

export default async function Post({params}: any){
    const id = (await params).postId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const msg = response.data
    return <div>
        Title : {msg.title}
        <br></br>
        Body : {msg.body}
    </div>
}