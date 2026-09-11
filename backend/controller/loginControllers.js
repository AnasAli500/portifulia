const LoginModel = require("../Model/LoginModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login controller
const loginUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Check if email and password are provided
        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user by email
        const user = await LoginModel.findOne({ Email });
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.Email },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "24h" }
        );

        // Return success response
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                id: user._id,
                email: user.Email
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// Register controller (if needed)
const registerUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Check if email and password are provided
        if (!Email || !Password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Check if user already exists
        const existingUser = await LoginModel.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);

        // Create new user
        const newUser = new LoginModel({
            Email,
            Password: hashedPassword
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.Email },
            process.env.JWT_SECRET || "your-secret-key",
            { expiresIn: "24h" }
        );

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token: token,
            user: {
                id: newUser._id,
                email: newUser.Email
            }
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    loginUser,
    registerUser
};
