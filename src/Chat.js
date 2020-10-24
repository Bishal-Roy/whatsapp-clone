import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className='chat'>
            <div className="chatheader">
                <Avatar />
                <div className="chatheader_info">
                    <h3>Room name</h3>
                    <p>last seen at...</p>

                </div>
                <div className='chatheader_right'>
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />                     
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chatbody">
                <p className='chatmassage'>
                    <span className='chat_name'>bishal</span> 
                    this is a massage
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>    
                </p>

                <p className='chatmassage chatreciver'>
                    <span className='chat_name'>bishal</span> 
                    this is a massage
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>    
                </p>
                <p className='chatmassage'>
                    <span className='chat_name'>bishal</span> 
                    this is a massage
                    <span className="chat_timestamp">
                        {new Date().toUTCString()}
                    </span>    
                </p>   
            </div>
            <div className="chatfooter">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder= 'type a massage'/>
                    <button type='submit'>Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat
