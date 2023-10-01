import { AudioOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import youtubeAxios from '../../components/youtube/youtubeAxios';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const Youtube = () => {
  const [video, setVideo] = useState(null)

  useEffect(()=>{
    console.log('Video', video);
  },[video]);

  const onSearch = async (value, _e, info) => {
    const response = await youtubeAxios.get('/search', {
      params: {
        q: value
      }
    })
    setVideo(response)
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
    </Space>
  );

}

export default Youtube

