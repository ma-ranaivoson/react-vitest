import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        { name: 'Vishwas' },
        { name: 'Malala' },
        { name: 'Vishwas 2' },
        { name: 'Malala 2' },
      ],
      {
        status: 500,
      }
    );
  }),
];
