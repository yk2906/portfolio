import React from 'react';
import '../assets/styles/style.css';
import Form from '../components/Forms/Form';


const Main = () => {
    return(
        <div className='container'>
            <h1>プロフィール</h1>
            <p>氏名　小浜佑斗</p>
            <p>生年月日　1997年5月6日</p>
            <p>性別　男</p>
            <p>血液型　B型</p>
            <p>出身地　大阪府</p>

            <h1>略歴</h1>
            <p>2016年3月　大阪府立桃谷高等学校　卒業</p>
            <p>2020年3月　近畿大学経営学部会計学科　卒業</p>
            <p>2020年7月　フォース株式会社　入社</p>

            <h1>スキル・資格</h1>
            <p>日商簿記検定2級</p>
            <p>TOEIC 615点</p>
            <p>Microsoft Office Specialist Excel 2016</p>

            <h1>趣味</h1>
            <p>読書</p>
            <p>ゲーム</p>
            <p>散歩</p>

            <h1>目標</h1>
            <p>現段階では、一つの分野の技術だけでなくフロントエンド、バックエンド、インフラ周りの技術をバランス良く身に着けていく事が目標です。
                将来的には技術以外でも相手の要望や要求に答えられる課題解決能力、
                提案力や一緒に働きやすいと思ってもらえるような技術力と人間力を持ったエンジニアになっていきたいです。
            </p>

            <h1>お問い合わせ</h1>
            <Form />
        </div>
    )
}

export default Main;