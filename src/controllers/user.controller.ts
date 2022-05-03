import { Request, Response } from 'express';

class UserController {
  home(req: Request, res: Response) {
    return res.json({
      message: 'teste',
    });
  }
}

export default new UserController();
