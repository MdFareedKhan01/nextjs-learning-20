export default async function BlogPage({params}: any){
    const idArray = (await params).id
    return <div>
        START-
        {JSON.stringify(idArray)}
        -END
    </div>
}