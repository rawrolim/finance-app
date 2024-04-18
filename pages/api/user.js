import JSONDatabase from '../../config/database';

export default async function handler(req, res) {
  try {
    const dbUsers = new JSONDatabase('users');
    if (req.method == 'POST') {
      const user = await dbUsers.push(req.body);
      new JSONDatabase(user._id + '-saida');
      new JSONDatabase(user._id + '-entrada');
    } else if (req.method == 'PUT') {
      dbUsers.update(req.body._id, req.body);
    } else if (req.method == 'DELETE') {
      dbUsers.delete(req.body._id);
    } else if (req.method == 'GET') {
      const user = await dbUsers.getById(req.body._id);
      return res.status(200).json(user)
    }
    res.status(200).json()
  } catch (e) {
    console.log(e)
    res.status(500).json()
  }
}
