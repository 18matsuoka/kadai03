import { Button, CardActions, CardContent, Typography } from '@mui/material'
import './App.css'
import classes from "./scss/app.module.scss"
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

function App() {

  //タスクの型
  type todo = {
    title:string,
    content:string
  }

  // Todoアプリに使用する情報
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // 登録されるデータを保持するuseState
  const [data, setData] = useState<todo[]>([]);
  
  // 送信を押したら登録
  const handleAddSubmit = (e:any) => {
    //リロードを行わないようにする処理。
    e.preventDefault();

    

    // データを登録するための「塊＝オブジェクト」を作る
    let pushData:todo = {
      title,
      content,
    };
    setData([...data, pushData]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="App">
      <div className={classes.nav}>
        <Button className={classes.between} variant="outlined" color="secondary">Home</Button>
        <Button className={classes.between} variant="outlined" color="secondary">Sign in</Button>
        <Button className={classes.between} variant="outlined" color="secondary">Sign up</Button>
      </div>

      <hr />
      <div className="main-wrap">
        <div className="title-area">Todo管理</div>
        <div className="explain-area">タスク管理用アプリ</div>
        <div className="create-task-area">
          <form onSubmit={handleAddSubmit}>
            {/* タスクのタイトル */}
            <input
              type="text"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            /><br />
            {/* タスクの内容 */}
            <input
              type="text"
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}
            /><br />
            <button type="submit">タスク生成</button>
          </form>
        </div>
        <Card sx={{ minWidth: 20 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {(data.length===0) ?"":data[0].title}
            </Typography>
            <Typography variant="body2">
            {(data.length===0) ?"":data[0].content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">編集</Button>
            <Button size="small">削除</Button>
          </CardActions>
        </Card>
      </div>

    </div>
  )
}

export default App
