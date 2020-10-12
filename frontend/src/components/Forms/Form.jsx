
// import DialogContentText from '@material-ui/core/DialogContentText';
import axios from 'axios';


// export default function Form() {
    // const [open, setOpen] = React.useState(false);

    // const [name,setName] = useState("")
    // const [email,setEmail] = useState("")
    // const [content,setContent] = useState("")
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

    // const inputName = useCallback((event) => {
    //   setName(event.target.value)
    // },[setName])

    // const inputEmail = useCallback((event) => {
    //   setEmail(event.target.value)
    // },[setEmail])

    // const inputContent = useCallback((event) => {
    //   setContent(event.target.value)
    // },[setContent])

    const submitForm = () => {

      // const payload = {
      //   text: name + '\n'
      //         email + '\n'
      //         content
      // }
      axios.get("/api/").then(response => {
        console.log(response.data)
        alert('お問い合わせありがとうございます。後程、ご返信致します。' + '\n'
              + 'お名前: ' + response.data.name + '\n'
              + 'メールアドレス: ' + response.data.email + '\n'
              + 'お問い合わせ内容: ' + response.data.content)
              
        // return handleClose()
      })
      .catch(error => {
        console.log(error);
        alert('送信エラーが発生しました。再度入力をお願いします。')
      })
      .finally(() => {

      })
      // setName("")
      // setEmail("")
      // setContent("")
      // return handleClose()
    }
    
// }

