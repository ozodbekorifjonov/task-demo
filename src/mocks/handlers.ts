import { http, HttpResponse } from 'msw';

let userData = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Software engineer',
  profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO78Djeugly7SsTHwoNk4cUJtTAvo3rHTG5w&usqp=CAU',
};

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json(userData);
  }),
  http.put('/api/user/:id', (req, res, ctx) => {
    console.log('hello req', req);
    const { id } = req.params;
    const values = req.body;

    if (parseInt(id) === userData.id) {
      userData = {
        ...userData,
        ...values,
      };
      return res(ctx.json(userData));
    } else {
      return res(ctx.json({ error: 'User not found' }));
    }
  }),
];
