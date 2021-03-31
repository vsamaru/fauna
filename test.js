
import { 
    fSignup,
    fLogin,
    fLogout,
    fUpdateAccount,
    fUpdatePassword,
    fDeleteAccount,
    fGetUserData,
    fUpdateTodos
 } from './src/fauna.helpers'

            

var n = async id => {

var payload = id

    id = await fSignup(payload.email, payload.message.from.first_name, payload.message.from.last_name, payload.update_id, true)
 
    return console.log(id)
}

   
n({
"update_id": "257812734",
    "email": "uru@live.ru",
    "message": {
        "message_id": 9497,
        "from": {
            "id": 465081843,
            "is_bot": false,
            "first_name": "Папа",
            "last_name": "Свин",
            "username": "papaswin",
            "language_code": "ru"
        },
        "chat": {
            "id": 465081843,
            "first_name": "Папа",
            "last_name": "Свин",
            "username": "papaswin",
            "type": "private"
        },
        "date": 1617214040,
        "text": "/help",
        "entities": [
            {
                "offset": 0,
                "length": 5,
                "type": "bot_command"
            }
        ]
    }
})
