export interface Article {
    uuid: string;
    title: string;
    content: string;
    author: {
        uuid: string,
        name: string
    };
    image: string;
    published_on: string;
}

export const data = [
    {
        'uuid': 'uuid-article-1',
        'title': 'Sacrifice',
        'content': 'Pellentesque rutrum sit amet neque lobortis feugiat. Etiam rutrum eget nisi vitae facilisis. ' +
            'Suspendisse auctor non eros ut pulvinar. Curabitur vitae diam rhoncus, pellentesque lectus eget, tincidunt sapien. ' +
            'Suspendisse rhoncus tincidunt nulla, sed tincidunt odio pulvinar vel. Quisque et mollis mi. Aliquam id blandit lacus. ' +
            'Proin malesuada ex ut nulla vestibulum imperdiet. Suspendisse congue congue diam ut interdum.',
        'author': {
            'uuid': 'uuid-author-1',
            'name': 'Lagertha'
        },
        'image': 'https://picsum.photos/400/250/?image=92',
        'published_on': '7/14/2018'
    },
    {
        'uuid': 'uuid-article-2',
        'title': 'On crusades',
        'content': 'Pellentesque rutrum sit amet neque lobortis feugiat. Etiam rutrum eget nisi vitae facilisis. ' +
            'Suspendisse auctor non eros ut pulvinar. Curabitur vitae diam rhoncus, pellentesque lectus eget, tincidunt sapien. ' +
            'Suspendisse rhoncus tincidunt nulla, sed tincidunt odio pulvinar vel. Quisque et mollis mi. Aliquam id blandit lacus. ' +
            'Proin malesuada ex ut nulla vestibulum imperdiet. Suspendisse congue congue diam ut interdum.',
        'author': {
            'uuid': 'uuid-author-2',
            'name': 'Ragnar Lothbrok'
        },
        'image': 'https://picsum.photos/400/250/?image=936',
        'published_on': '8/15/2018'
    },
    {
        'uuid': 'uuid-article-3',
        'title': 'The rising',
        'content': 'Pellentesque rutrum sit amet neque lobortis feugiat. Etiam rutrum eget nisi vitae facilisis. ' +
            'Suspendisse auctor non eros ut pulvinar. Curabitur vitae diam rhoncus, pellentesque lectus eget, tincidunt sapien. ' +
            'Suspendisse rhoncus tincidunt nulla, sed tincidunt odio pulvinar vel. Quisque et mollis mi. Aliquam id blandit lacus. ' +
            'Proin malesuada ex ut nulla vestibulum imperdiet. Suspendisse congue congue diam ut interdum.',
        'author': {
            'uuid': 'uuid-author-3',
            'name': 'Rollo'
        },
        'image': 'https://picsum.photos/400/250/?image=387',
        'published_on': '9/16/2018'
    },
    {
        'uuid': 'uuid-article-4',
        'title': 'The offspring',
        'content': 'Pellentesque rutrum sit amet neque lobortis feugiat. Etiam rutrum eget nisi vitae facilisis. ' +
            'Suspendisse auctor non eros ut pulvinar. Curabitur vitae diam rhoncus, pellentesque lectus eget, tincidunt sapien. ' +
            'Suspendisse rhoncus tincidunt nulla, sed tincidunt odio pulvinar vel. Quisque et mollis mi. Aliquam id blandit lacus. ' +
            'Proin malesuada ex ut nulla vestibulum imperdiet. Suspendisse congue congue diam ut interdum.',
        'author': {
            'uuid': 'uuid-author-2',
            'name': 'Ragnar Lothbrok'
        },
        'image': 'https://picsum.photos/400/250/?image=27',
        'published_on': '10/17/2018'
    },
    {
        'uuid': 'uuid-article-5',
        'title': 'Burning it all down',
        'content': 'Pellentesque rutrum sit amet neque lobortis feugiat. Etiam rutrum eget nisi vitae facilisis. ' +
            'Suspendisse auctor non eros ut pulvinar. Curabitur vitae diam rhoncus, pellentesque lectus eget, tincidunt sapien. ' +
            'Suspendisse rhoncus tincidunt nulla, sed tincidunt odio pulvinar vel. Quisque et mollis mi. Aliquam id blandit lacus. ' +
            'Proin malesuada ex ut nulla vestibulum imperdiet. Suspendisse congue congue diam ut interdum.',
        'author': {
            'uuid': 'uuid-author-1',
            'name': 'Lagertha'
        },
        'image': 'https://picsum.photos/400/250/?image=283',
        'published_on': '11/18/2018'
    },
];
