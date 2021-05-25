import classes from './Profile.module.css'

function Profile() {
    return (
        <div className={classes.content}>
                <img
                    src={'https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/185783/1618342729_266854_url.jpeg'}/>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                    <div className={classes.item}>
                        post3
                    </div>
                </div>
            </div>
    )
}

export default Profile;