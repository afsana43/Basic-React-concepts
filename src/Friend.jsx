
export default function Friend({friends}){

    const {name, email} = friends;
    return(
        <div>
         <p>Name: {name}</p>
         <p>Email: {email}</p>
        </div>
    )
}