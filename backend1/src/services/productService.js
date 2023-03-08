const db = require('../database/models/index');


const getProducts = async () => {
        const productList = await db.Product.findAll();
        return productList;
}

const addProduct = async (name, description, price) => {
        console.log(name, description, price)
        const productList = await db.Product.create(
                {
                        name,
                        description,
                        price
                }
        );
        return productList;
}

const addProductToCard = async (userId, productId) => {
        console.log(productId);
        const foundUser = await db.User.findOne(
                {
                        where: {
                                id: userId
                        }
                }
        );
        const foundProduct = await db.Product.findOne(
                {
                        where: {
                                id:productId
                        }
                }
        );
        if (!foundProduct) {
                throw new Error("not found");
        }
        const updatedUser = await db.User.update(
                { cartDetails: [...foundUser.cartDetails, productId] },
                {
                        where: {
                                id: userId
                        }
                }
        )
        await foundUser.save();
        console.log(updatedUser);
        return foundUser;
}


module.exports = { getProducts, addProduct, addProductToCard };