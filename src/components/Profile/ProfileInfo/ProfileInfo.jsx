import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={classes.profileInfo}>
            <img src={'https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/185783/1618342729_266854_url.jpeg'}/>
            <div>
                ava + description
            </div>
        </div>
    )
}
            
export default ProfileInfo;