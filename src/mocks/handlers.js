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
  http.put('/api/user/:id', async ({ request, params }) => {
    const { id } = params;
    const updatedProfile = await request.json();

    if (parseInt(id) === userData.id) {
      userData = {
        ...userData,
        ...updatedProfile,
      };
      return HttpResponse.json(userData, { status: 200 });
    } else {
      return HttpResponse.json('User not found', { status: 404 });
    }
  }),
];
