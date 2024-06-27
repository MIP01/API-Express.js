const UsersModel = require('../module/users');

const getAllUsers = async (req, res, next) => {
    try {
        const data = await UsersModel.getAllUsers();
        res.success(data);
    } catch (error) {
        next(error);
    }
}

const createNewUser = async (req, res, next) => {
    const { body } = req;

    try {
        if (!body.email || !body.name || !body.address) {
            throw Error(); // lemparkan error tanpa pesan atau status
        }

        const newUser = await UsersModel.createNewUser(body);
        res.success(newUser);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    const userId = Number(req.params.idUser);
    const { body } = req;
    try {
        const updatedUser = await UsersModel.updateUser(body, userId);
        res.success(updatedUser);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    const userId = Number(req.params.idUser);
    try {
        await UsersModel.deleteUser(userId);
        res.success(null);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
