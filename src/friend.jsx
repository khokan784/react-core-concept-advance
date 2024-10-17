export default function Friend({gfriend}){
    const {name,email} = gfriend;
    return (
        <div className="box">
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}