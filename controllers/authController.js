import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth.js';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken(user);
    res.json({ token });
};
