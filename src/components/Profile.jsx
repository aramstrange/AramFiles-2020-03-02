import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://thumbnails.trvl-media.com/BDPWdlXKa5SXtqOmZmLL-GEW8Lg=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/12000000/11020000/11018100/11018047/fa626efb_z.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                        New Post
                </div>
                <div className="posts">
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;