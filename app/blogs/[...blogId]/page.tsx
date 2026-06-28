import axios from 'axios'

export default async function BlogPage({params}: any){
    const idArray = (await params).blogId
    return <div>
        {JSON.stringify(idArray)}
    </div>

}