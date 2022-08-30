const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article title2',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Article title3',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-03-2022'),
            author: 'John Doe'
        }
    ],
};

export default initialState;