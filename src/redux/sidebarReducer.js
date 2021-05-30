switch (obj.type) {
            case(ADD_NEW_POST):
                let newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    message: this._state.profilePage.textAreaData,
                    likes: 0,
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.textAreaData = '';
                this.rerender(this._state);
                break;
            case(UPDATE_TEXT):
                this._state.profilePage.textAreaData = obj.newText;
                this.rerender(this._state);
                break;
           case(ADD_NEW_MESSAGE):
                let newMessage = {
                    message: this._state.messagesPage.newMessageBody,
                }
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageBody = '';
                this.rerender(this._state);
                break;
            case(UPDATE_MESSAGE_BODY):
                this._state.messagesPage.newMessageBody = obj.newBody;
                this.rerender(this._state);
                break;
            default:
                break;

        }