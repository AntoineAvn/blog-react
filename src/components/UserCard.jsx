import '../styles/userCard.css'
import UserInfo from './UserInfo.jsx'

function UserCard () {

    const Users = [
        { name: "John", commentaire: 'étudiant', connaissance: false, star: 3, smiley: 4 },
        { name: "Paul", commentaire: 'étudiant', connaissance: true, star: 1, smiley: 2 },
        { name: "Ringo", commentaire: 'salarié', connaissance: false, star: 5, smiley: 3 },
        { name: "Georges", commentaire: 'étudiant', connaissance: true, star: 4, smiley: 1 },
        { name: "Yoko", commentaire: 'étudiant', connaissance: false, star: 2, smiley: 5 },
        { name: "Mickael", commentaire: 'salarié', connaissance: true, star: 3, smiley: 4 },
        { name: "Elvis", commentaire: 'étudiant', connaissance: false, star: 1, smiley: 2 },
        { name: "Freddie", commentaire: 'salarié', connaissance: true, star: 5, smiley: 3 },
        
    ]

    return (
        <ul>
            {Users.map((user, index) => (
                <UserInfo key={`${user}-${index}`} name={user.name} index={index} commentaire={user.commentaire} connaissance={user.connaissance} star={user.star} smiley={user.smiley} />
            ))}
        </ul>
    )
  }
  
  export default UserCard