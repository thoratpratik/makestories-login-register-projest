const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt =require('jsonwebtoken');

const User = require('../models/User');







// User Registration 
// GET api/user

router.post('/api/user' , 
            // validation 
            [
            check('name','Name Is Required').not().isEmpty(),
            check('email','Please enter Valid Email').isEmail(),
            check('password','Please Enter valid 6 digit password').isLength({ min: 6 })
            ],

             async (req,res) => {
                const errors = validationResult(req);
                if(!errors.isEmpty())
                {
                    return res.status(400).json({ errors : errors.array() });
                }

                const { name, email, password } = req.body;

                try {
                        // checking user already present or not 
                        let user = await User.findOne( { email })
                        if(user) {
                            return res.status(400).json({ errors : [ { msg: 'User already Present' } ] });
                        }

                        user = new User ( {
                            name,
                            email,
                            password
                        })

                        // password Encryption
                        const salt = await bcrypt.genSalt(10);
                        user.password = await bcrypt.hash(password,salt);
                        await user.save()
                        
                        // restun jsonwebtoken
                        const payload ={
                            user:{
                                id : user.id
                            }
                        }

                        jwt.sign(
                        payload,
                        config.get('jwtSecret'),
                        { expiresIn: 360000 },
                        (err,token) => {
                            if(err) throw err;
                            res.json({ token }); 
                        } );

                }catch(err){
                        console.error(err.message);
                        res.status(500).send('Server Error');
                }
            
        
             }    
            
            )

module.exports = router;