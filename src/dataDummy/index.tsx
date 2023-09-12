const idUser = 182981281
const idTalent = 182981281

const datas = [
  {
    id: idUser,
    username: 'Kuwan',
    email: 'kuwan@gmail.com',
    numberPhone: '089897677',
    gender: 'male',
    isLive:true,
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
    email: 'siti@gmail.com',
    numberPhone: '839283928392',
    gender: 'female',
    isLive:true,
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
