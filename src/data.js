export const buttons_navbar = [
    "О нас",
    "ТОП-кондитеры",
    "Новинки",
    "Подписки",
    "История заказов"
];

export const buttons_navbar_fp = [
    "ТОП-кондитеры",
    "О нас",
    "Авторизация",
];

export const buttons_navbar_pp = [
    "Заказы",
    "Мои навыки",
    "Изменить профиль"
];

// export default { buttons_navbar, buttons_navbar_fp};

export const cake_cards = [
    {
        id: 1,
        photo: "https://e7.pngegg.com/pngimages/501/207/png-clipart-cartoon-cat-cartoon-cat-cartoon-animals.png",
        text: "Тортик 1",
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit",

    },
    {
        id: 2,
        photo: "https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-v7dt-p-kartinki-kot-pushin-na-prozrachnom-fone-4.png",
        text: "Тортик 2",
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit",
    },
    {
        id: 3,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRCPCilNe8H-Xm_rC0VhDB_tabh_T5Vv7qPQm9vNhmXny1ri6jCWDywAsZUUWR9kzCz4&usqp=CAU",
        text: "Тортик 3",
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit",
    },
    {
        id: 4,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmItwnMYsiLaHaew4RCOYeAu90pE_sKpfmJg&s",
        text: "Тортик 4",
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit",
    }

]



export const master_cards = [
    {
        id: 1,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRCPCilNe8H-Xm_rC0VhDB_tabh_T5Vv7qPQm9vNhmXny1ri6jCWDywAsZUUWR9kzCz4&usqp=CAU",

        text: "Чувачок 1",
        subs: 1000,
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit"
    },
    {
        id: 2,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmItwnMYsiLaHaew4RCOYeAu90pE_sKpfmJg&s",
        text: "Чувачок 2",
        subs: 1000,
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit"
    },
    {
        id: 3,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRCPCilNe8H-Xm_rC0VhDB_tabh_T5Vv7qPQm9vNhmXny1ri6jCWDywAsZUUWR9kzCz4&usqp=CAU",
        text: "Чувачок 3",
        subs: 1000,
        more: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.Hendrerit"
    }

]


import { useState, useEffect } from "react";

const CakesList = () => {
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/cakes")  // Меняй на свой бэкенд
            .then((response) => response.json())
            .then((data) => {
                setCakes(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error.message}</p>;

    return (
        <div>
            {cakes.map((cake) => (
                <div key={cake.id}>
                    <img src={cake.photo} alt={cake.text} width={150} />
                    <h3>{cake.text}</h3>
                    <p>{cake.more}</p>
                </div>
            ))}
        </div>
    );
};

export default CakesList;