import React,{useState} from 'react'
import {Modal,Avatar,Typography,Input,Button,Tag,Form,Space,Card,List} from 'antd'
import { getAccessToken } from '../../../utils/Token'
import {UserOutlined,CloseCircleFilled,LoadingOutlined} from '@ant-design/icons'
import { ChatState } from '../../../context/ChatProvider'
import axios from 'axios'
import './style.scss'
const {Title} = Typography

function ModalGroupProfile({open,onClose,fetchAgain,setFetchAgain}) {
    const datas = JSON.parse(localStorage.getItem("userInfo"))
    const token = getAccessToken()
  const [groupChatName, setGroupChatName] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [renameloading, setRenameLoading] = useState(false);

  const { selectedChat, setSelectedChat, user } = ChatState();

  const handleRemove = async (user1) => {
    if (selectedChat.groupAdmin._id !== datas._id && user1._id !== datas._id) {
      alert('Only admins can remove someone!')
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `http://localhost:5000/chat/groupremove`,
        {
          chatId: selectedChat._id,
          userId: user1._id,
        },
        config
      );

      user1._id === datas._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
    //   fetchMessages();
      setLoading(false);
    } catch (error) {
      alert('error remove people')
      setLoading(false);
    }
    setGroupChatName("");
  };

    const handleRename = async () => {
        if (!groupChatName) return;
    
        try {
          setRenameLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axios.put(
            `http://localhost:5000/chat/rename`,
            {
              chatId: selectedChat._id,
              chatName: groupChatName,
            },
            config
          );
    
        //   console.log(data._id);
          // setSelectedChat("");
          setSelectedChat(data);
          setFetchAgain(!fetchAgain);
          setRenameLoading(false);
        } catch (error) {
          alert('Failed')
          setRenameLoading(false);
        }
        setGroupChatName("");
      };

      const handleSearch = async (query) => {
        setSearch(query);
        if (!query) {
          return;
        }
    
        try {
          setLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axios.get(`http://localhost:5000/user?search=${search}`, config);
        //   console.log(data);
          setLoading(false);
          setSearchResult(data);
        } catch (error) {
          alert('failed search')
          setLoading(false);
        }
      };
    //   console.log("user", user);
      const handleAddUser = async (user1) => {
        if (selectedChat.users.find((u) => u._id === user1._id)) {
          alert('User Already in group!')
          return;
        }
    
        if (selectedChat.groupAdmin._id !== datas._id) {
          alert('Only admins can add someone!')
          return;
        }
    
        try {
          setLoading(true);
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axios.put(
            `http://localhost:5000/chat/groupadd`,
            {
              chatId: selectedChat._id,
              userId: user1._id,
            },
            config
          );
    
          setSelectedChat(data);
          setFetchAgain(!fetchAgain);
          setLoading(false);
        } catch (error) {
          alert('failed to add people')
          setLoading(false);
        }
        setGroupChatName("");
      };
  return (
    <Modal
    open={open}
    footer={null}
    className='modal-profile'
    closeIcon={null}
    onCancel={onClose}
    >
        <Title level={2} className='text-center mt-3'>Group</Title>
        <div className='p-3'>
            {
                selectedChat?.users.map((item) => (
                    <Tag key={item._id} color='#00b96b' className='mb-2'>
                        {item.name} <CloseCircleFilled className='ms-1' onClick={() => handleRemove(item)}/>
                    </Tag>
                ))
            }
            <br/>
            <Space.Compact style={{width: "100%"}} className='mt-3'>
                <Input placeholder="Chat Name" value={groupChatName} onChange={(e) => setGroupChatName(e.target.value)} />
                <Button type="primary" onClick={handleRename}>
                    {
                        renameloading ? <LoadingOutlined/> : 'Update'
                    }
                </Button>
            </Space.Compact>
                <Input placeholder="Add people to group" className='mt-3' onChange={(e) => handleSearch(e.target.value)} />
                {loading ? (
                    <LoadingOutlined />
                    ) : (
                    <div className='mt-3' style={{width: "100%", height: "200px", overflow: "auto"}}>
                        {
                            searchResult?.map((item) => (
                                <Card 
                                    key={item._id} 
                                    onClick={() => handleAddUser(item)} 
                                    className='card-list mb-2 mx-3' 
                                    bodyStyle={{padding: 0}}
                                >
                                    <List itemLayout='horizontal'>
                                    <List.Item className='py-1 ps-2'>
                                        <List.Item.Meta
                                            avatar={<Avatar icon={<UserOutlined />} />}
                                            title={
                                            item.name
                                            }
                                            // description="email"
                                        />
                                    </List.Item>
                                    </List>
                                </Card>
                            ))
                        }
                    </div>
                )}
                <Button type='primary' danger className='float-end' onClick={() => handleRemove(datas)}>Leave Group</Button>
        </div>
    </Modal>
  )
}

export default ModalGroupProfile