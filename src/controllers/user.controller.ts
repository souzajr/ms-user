import { Request, Response } from 'express';

class UserController {
  public home(req: Request, res: Response) {
    return res.json({
      message: 'teste',
    });
  }
}

const userController = new UserController();

export default userController;
