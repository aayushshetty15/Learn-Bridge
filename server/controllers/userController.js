export const createUser = (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    res.json({
        message: "User created successfully",
        user: {
            name: name,
            email: email
        }
    });
};