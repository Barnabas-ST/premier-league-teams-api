const express = require('express')
const app = express()
const PORT = 8000

const premTeams = {
    'manchester united': {
        'nickName': 'Red Devils',
        'yearFounded': 1878,
        'stadium': 'Old Trafford',
        'location': 'Manchester, England'
    },

    'arsenal': {
        'nickName': 'Gunners',
        'yearFounded': 1886,
        'stadium': 'Emirates',
        'location': 'London, England'
    },

    'manchester city': {
        'nickName': 'City',
        'yearFounded': 1880,
        'stadium': 'Etihad',
        'location': 'Manchester, England'
    },

    'newcastle': {
        'nickName': 'The Magpies',
        'yearFounded': 1892,
        'stadium': 'St. James Park',
        'location': 'Newcastle, England'
    },

    'unknown': {
        'nickName': 'unknown',
        'yearFounded': 0,
        'stadium': 'unknown',
        'location': 'unknown'
    },
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html') //tells the server where to find the file starting in the current directory

})

app.get ('/api/:name', (request,response) => {
    const premTeamName = request.params.name.toLocaleLowerCase()
    if (premTeams[premTeamName]){
        response.json(premTeams[premTeamName])
    }else{
        response.json(premTeams['unknown'])
    }
})

app.listen (PORT, () =>{
    console.log(`The server is now running on port ${PORT}`)
})