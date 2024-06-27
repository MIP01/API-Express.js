const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async () => {
    return await prisma.users.findMany();
}

const createNewUser = async (body) => {
    return await prisma.users.create({
        data: {
            name: body.name,
            email: body.email,
            address: body.address,
        },
    });
}

const updateUser = async (body, idUser) => {
    return await prisma.users.update({
        where: { id: idUser },
        data: {
            name: body.name,
            email: body.email,
            address: body.address,
        },
    });
}

const deleteUser = async (idUser) => {
    return await prisma.users.delete({
        where: { id: idUser },
    });
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
