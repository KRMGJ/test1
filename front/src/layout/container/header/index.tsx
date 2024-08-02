import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Header() {

    const navigate = useNavigate();
    const [temp, setTemp] = useState(0);
    // 필요한 요청 파라미터를 조립하여 api로 부터 데이터 받아와 업데이트하는 함수
    const getWeather = () => {
        const key =
            "paJ%2BM8y80vWX8Gu5RWTDurJ0y5rQCX4tjEwLh0F%2FwfUABNbw%2BV2iJD%2FBahqq08K%2BvzgPyAU0GFZ84LmVfEDPgA%3D%3D";

        const dd = new Date();
        const y = dd.getFullYear();
        const m = ("0" + (dd.getMonth() + 1)).slice(-2);
        const d = ("0" + dd.getDate()).slice(-2);
        const ds = y + m + d;

        const dd2 = new Date();
        const h = ("0" + dd2.getHours()).slice(-2);
        const ts = `${h}00`;

        var url =
            "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey= " +
            key +
            "&pageNo=1&numOfRows=1000&dataType=JSON" +
            "&base_date=" +
            ds +
            "&base_time=" +
            ts +
            "&nx=67&ny=100";

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.response.body.items.item);
                const itemArr = data.response.body.items.item;
                const result = {};
                itemArr.forEach((item:any) => {
                    if (item.category === "T1H") {
                        setTemp(item.obsrValue);
                    }
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getWeather();
    }, []);
    const handleHome = () => {
        navigate('/');
    }

    const handleWrite = () => {
        navigate('/board/write');
    }

    return (
        <div className='header-container'>
            <div className='board-button ' onClick={handleHome}>Logo</div>
            <div className='board-button ' >현재 기온 : {temp}</div>
            <div className='board-button' onClick={handleWrite}>글 작성</div>
            <div className='board-button'>Login</div>
            <div className='board-button'>Sign Up</div>
        </div>
    )
}
