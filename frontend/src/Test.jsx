import React,{useState} from 'react';
import axios from 'axios';

const Test = () => {
    const [state, setState] = useState("null")

    const pressButton = () => {
        axios.get("https://api.github.com/users/yk2906").then(response => {
            console.log('body:', response.data)
            setState(response.data.avatar_url)
            alert('apiの取得に成功しました！')
          })
          .catch(error => {
            console.log(error);
            alert('送信エラーが発生しました。再度入力をお願いします。')
          })
          .finally(() => {
    
        })
    }
    
    return(
        <div>
            <h1>テスト: {state}</h1>
            <button onClick={() => pressButton()}>テスト</button>
        </div>
    )
}

export default Test;