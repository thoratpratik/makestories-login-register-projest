const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Profile = require('../models/Profile');
const { route } = require('./user');
const auth = require('../middleware/auth')

//@route  GET /me
//@desc   Get login data of login user ie.  hobbies , bio, profile , name , etc  

router.get('/api/user/profile/me',auth ,async (req , res )=> {
    try {
        const profile = await Profile.findOne({user : req.user.id  }).populate('user',['name']);
        
        if(!profile)
        {
            return res.status(400).json({ msg : 'There is no Profile for this user'});
        }

        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});



// edit and create profile details

router.post('/api/user/profile',
           [
            auth,
            [
                check('profession','Profession is required').not().isEmpty(),
                check('city','City is required').not().isEmpty()
            ]
           ] ,
            
            async (req,res)=> {
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({ errors : errors.array() });
                }

                const {
                    profileImg,
                    profession,
                    city,
                    bio,
                    hobby
                } = req.body

               const profileFields = {};

               profileFields.user = req.user.id;

               if(profileImg) profileFields.profileImg = profileImg;
               if(profession) profileFields.profession = profession;
               if(city) profileFields.city = city;
               if(bio) profileFields.bio = bio;
               if(hobby){
                profileFields.hobby = hobby.split(',').map(h => h.trim());
            }

            try {

                let profile = Profile.findOne({ user:req.user.id })

                if(profile){
                    profile = await Profile.findOneAndUpdate(
                                { user : req.user.id },
                                {$set : profileFields },
                                {new:true,upsert:true,setDefaultsOnInsert:true}
                    );
                    return res.json(profile)

                };

                // create new Profile 
                profile = new Profile(profileFields);

                await profile.save()
                res.json(Profile);
                
            } catch (error) {
                console.error(errors.message);
                res.status(500).send('Server Error');
            }
            })


module.exports = router;