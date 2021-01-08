import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css';

function Message({ message, username }) {
    const isUser = username === message.username;//进行比较 true false
    console.log(isUser);
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        component="h2" >
                        {!isUser && `${message.username}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
