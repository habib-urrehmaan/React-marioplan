const initState = {
    projects:[
        {id:'1',title:'help me find peach',content:'blah blah blah'},
        {id:'2',title:'help me find peach',content:'blah blah blah'},
        {id:'3',title:'help me find peach',content:'blah blah blah'}
    ]
};

const projectReducer = (state = initState,action) => {
    switch(action.type)
    {
        case "CREATE_PROJECT":
            console.log('create project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.error);
            return state;
    }
    return state;
}

export default projectReducer;