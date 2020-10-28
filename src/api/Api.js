const API_URL = "https://my-first-kanban.herokuapp.com"

const Api = {
    registerUser: async(form) => {
        let user = JSON.stringify(form)
        try {
            const found = await fetch(`${API_URL}/registrar`, {
                method: "POST",
                body: user,
                headers: { 'Content-Type': 'application/json' }
            })
            const json = await found.json()
            if(found.status === 400){
                return ({status: found.status, message: json.error})
            } else {
                return({status: found.status})
            }
        } catch (error) {
            console.log(error)
        }
        
    },
    loginUser: async (form) => {
        let user = JSON.stringify(form)
        try {
            const found = await fetch(`${API_URL}/login`, {
                method: "POST",
                body: user,
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' }
            })
            const json = await found.json()
            if(found.status === 401){
                return ({status: found.status, message: json.error})
            } else {
                return({status: found.status})
            }
        } catch (error) {
            console.log(error.message)
            return error
        }
    },
    getUsersTasks: async() =>{
        const found = await
        fetch(`${process.env.API_URL}/tasks`)
        .then ((response) => {
            return response.json()
        }).then(data => {
            console.log(data)
            return data
        })
        .catch((error) => {
            return error
        })
    return found
    }
}

export default Api;