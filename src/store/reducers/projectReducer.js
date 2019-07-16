const initState = {
    projects: [
        {id: '1', title: 'help me', content: 'test'},
        {id: '2', title: 'collect', content: 'test'},
        {id: '1', title: 'help me 2', content: 'test'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;