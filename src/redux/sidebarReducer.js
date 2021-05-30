let initialState = {
            friends: [
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Oleg'
                },
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Roman'
                },
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Sasha'
                },
            ],
        }

const sidebarReducer = (state=initialState, action) => {
    return state;
}

export default sidebarReducer;