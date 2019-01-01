export interface Author {
    uuid: string;
    name: string;
    image: string;
    articles: string[];
}

export const data = [
    {
        'uuid': 'uuid-author-1',
        'name': 'Lagertha',
        'image': 'https://vignette.wikia.nocookie.net/vikingstv/images/5/51/Screen_Shot_2018-12-20_at_7.01.41_PM.png/revision/latest?cb=20181221030718',
        'articles': [ 'uuid-author-1', 'uuid-author-5' ]
    },
    {
        'uuid': 'uuid-author-1',
        'name': 'Ragnar Lothbrok',
        'image': 'https://vignette.wikia.nocookie.net/vikingstv/images/b/b7/Ragnar_s2.jpg/revision/latest?cb=20170115224647',
        'articles': [ 'uuid-author-2', 'uuid-author-4' ]
    },
    {
        'uuid': 'uuid-author-3',
        'name': 'Rollo',
        'image': 'https://vignette.wikia.nocookie.net/vikingstv/images/0/00/4x17_Rollo_Picture.jpeg/revision/latest?cb=20170108232544',
        'articles': [ 'uuid-author-3' ]
    },
];
