const idUser = '182981281'
const idTalent = '182981281'

const datas = [
  {
    id: idUser,
    username: 'Kuwan',
    email: 'kuwan@gmail.com',
    password:'kuwan22',
    numberPhone: '+621234512345',
    verifcode:123,
    gender: 'male',
    isHost:true,
    isLive:true,
    liveId:'1234',
    follower: [
      {
        id: idTalent,
        username:"rijal"
      },
    ],
    following:[
        {
            id: idTalent,
            username:"rijal"
        }
    ],
    chats:[
        {
            id:idTalent,
            chat:"hallo"
        },
        {
            id:idUser,
            chat:"Iya?"
        }
    ]
  },
  {
    id: idTalent,
    username: 'Siti',
    email: 'aditya112@gmail.com',
    password:'aditya112',
    numberPhone: '+621234512345',
    gender: 'female',
    isHost:false,
    follower: [
      {
        id: idUser,
        username:"rijal"
      },
    ],
    following:[
        {
            id: idUser,
            username:"rijal"
        }
    ],
    chats:[
        {
            id:idUser,
            chat:"hallo"
        },
        {
            id:idUser,
            chat:"Iya?"
        }
    ]
  },
  
];

export default datas
