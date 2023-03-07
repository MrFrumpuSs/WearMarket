import AuthService from '../services/AuthService.js';
import {validationResult} from 'express-validator';

class AuthController {
    async register(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(400).json({message: errors}); 
            }
            const {email, login, name, sname, password} = req.body;
            const user = await AuthService.register({email, login, name, sname, password});
            res.json(user);
        } catch (e) {
            next(e);
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const user = await AuthService.login({email, password});
            
            res.cookie('token', user.token, {
                maxAge: 60 * 1000 * 60,
                httpOnly: true,
            });
            res.send(user);
        } catch (e) {
            next(e);
        }
    }
    async confirm(req, res, next) {
        try {
            const { id } = req.body;
            const confirmation = await AuthService.confirm({ id });
            res.json(confirmation);
        } catch (e) {
            next(e);
        }
    }
    async auth(req, res, next) {
        try {
            const { id } = req.user;
            const user = await AuthService.auth(id);
            res.cookie('token', user.token, {
                maxAge: 60 * 1000 * 60,
                httpOnly: true,
            });
            res.send(user);
        } catch (e) {
            next(e);
        }
    }
    async logout(req, res, next) {
        try {
            res.clearCookie("token");
            res.send({logout: true});
        } catch (e) {
            next(e);
        }
    }
}

export default new AuthController();