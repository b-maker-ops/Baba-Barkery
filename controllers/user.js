const User = require('../models/user');

const createUser = async (req,res) => {
    const content = req.body;

    console.log(content);
    try {
        const user = await User.create({...content}); 
        
        return res.statue(201).json({data: user});
    } catch (error) {
        console.log(error);
        return res.statue(500).end();
    }
};



module.exports = {
    createUser
};