import classes from './Post.module.css'

function Post(props) {

    return (

        <div className={classes.item}>
            <div>
                <img src={'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg'}/>
            </div>
            <div>{props.text}</div>
            <div><span>{`likes ${props.likes}`}</span></div>
        </div>

    )
}

export default Post;