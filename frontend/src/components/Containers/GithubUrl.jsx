import React,{useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


const GithubUrl = () => {

    const [state, setState] = useState("")

    const pressButton = () => {
        axios.get("https://api.github.com/users/yk2906").then(response => {
            console.log('body:', response.data)
            setState(response.data.html_url)
          })
          .catch(error => {
            console.log(error);
            alert('エラーが発生しました。')
          })
          .finally(() => {
    
        })
    }

    return(
        <div className='github-url'>
            <h1>My GitHub URL</h1>
            <p>URL : {state}</p>
            <Button variant="contained" color="primary" onClick={() => pressButton()}>
            GitHubのURLを取得する
            </Button>
            {/* <button onClick={() => pressButton()}>GitHubのURLを取得する</button> */}
        </div>
    )
}

export default GithubUrl;