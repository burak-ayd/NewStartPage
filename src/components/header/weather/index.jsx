import axios from "axios";
import { useEffect, useState } from "react";
import { useCity, useUnits, useLang, useWeather } from "~/stores/weather/hooks";
import { setWeather } from "~/stores/weather/actions";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import tr from "dayjs/locale/tr";

export default function Weather() {
    const ApiKEY = import.meta.env.VITE_WEATHER_API_KEY;
    const [fetching, setFetching] = useState(false);
    const [ApiUrl, setApiUrl] = useState("");

    dayjs.extend(customParseFormat, tr);

    const getCity = useCity();
    const getUnits = useUnits();
    const getLang = useLang();
    const getWeatherData = useWeather();

    const [weatherData, setWeatherData] = useState(getWeatherData);
    const [City, setCity] = useState(getCity);
    const [Units, setUnits] = useState(getUnits);
    const [Lang, setLang] = useState(getLang);

    // var Lon = 0;
    // var Lat = 0;

    // 5 günlük hava durumu
    // const ApiUrlCast = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${ApiKEY}`;

    // const getGeoLocation = async () => {
    //     await axios
    //         .get(
    //             `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=${ApiKEY}`
    //         )
    //         .then((res) => {
    //             Lon = res.data[0].lon;
    //             Lat = res.data[0].lat;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    useEffect(() => {
        setApiUrl(
            `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKEY}&units=${Units}&lang=${Lang}`
        );
        setCity(getCity);
        setUnits(getUnits);
        setLang(getLang);
        setWeatherData(getWeatherData);
        // console.log("ApiUrl", ApiUrl);
        const getWeatherMinute = async () => {
            // Hedef tarih formatını belirt
            const format = "DD.MM.YYYY HH:mm:ss";
            const currentDate = dayjs(dayjs(), format);
            // console.log("currentDate", currentDate);
            // Hedef tarihi güvenli bir şekilde analiz et
            const targetDateObject = dayjs(weatherData.date, format);
            // console.log("targetDateObject", targetDateObject);
            // Tarih analiz edilemezse veya hedef tarih invalid bir tarihse, kullanıcıya bir hata mesajı göster
            if (!targetDateObject.isValid()) {
                console.error("Geçersiz tarih formatı", targetDateObject);
                if (localStorage.getItem("Weather") === null) {
                    setFetching(true);
                }

                return;
            }
            // Farkı hesapla
            const diff = currentDate.diff(targetDateObject);
            // console.log("diff", diff);
            // Farkı saniyeye çevir

            const diffSecond = Math.round(diff / 1000);
            // console.log("targetDateObject", targetDateObject);
            // console.log("diffSecond", diffSecond);

            if (diffSecond >= 900) {
                setFetching(true);
            } else {
                setFetching(false);
            }
        };

        async function getWeather() {
            // console.log("getWeather");
            await axios
                .get(ApiUrl)
                .then((res) => {
                    var date = dayjs().format("DD.MM.YYYY HH:mm:ss");
                    const weather = {
                        city: res.data.name,
                        country: res.data.sys.country,
                        temp: Math.round(res.data.main.temp),
                        feels_like: Math.round(res.data.main.feels_like),
                        humidity: res.data.main.humidity,
                        wind: res.data.wind.speed,
                        description: res.data.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
                        date: date,
                        weather_date: dayjs
                            .unix(res.data.dt)
                            .format("DD.MM.YYYY HH:mm:ss"),
                    };
                    setWeather(weather);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        const deneme = async () => {
            // console.log("fetching", fetching);
            // getGeoLocation(); // Bu satırı isteğe bağlı olarak kullanabilirsiniz
            // console.log("weather");
            // getWeather();
            if (fetching) {
                await getWeather();
                console.log("getWeather");
                setFetching(false);
            }
            await getWeatherMinute();
        };
        // Yalnızca City, Lang veya Units değiştiğinde ve fetching true olduğunda çalışır
        if (City !== getCity || Lang !== getLang || Units !== getUnits) {
            console.log("asdasdasd");
            setCity(getCity);
            setUnits(getUnits);
            setLang(getLang);
            setWeatherData(getWeatherData);
            setFetching(true); // fetching'i true yaparak yeni veriyi çekeceğimizi belirtiyoruz
        }
        // Her dakika hesaplamayı tekrarla
        const intervalId = setInterval(deneme, 1000);

        // Temizlik fonksiyonu: Komponent kaldırıldığında interval'i temizle
        return () => clearInterval(intervalId);
    }, [
        ApiKEY,
        ApiUrl,
        City,
        Units,
        Lang,
        fetching,
        weatherData.date,
        getCity,
        getLang,
        getUnits,
        getWeatherData,
    ]);

    return (
        <>
            {weatherData && (
                <div className="flex justify-between items-center gap-1.5">
                    <div className="flex flex-row items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src={weatherData.icon}
                            alt={weatherData.description}
                        />
                        <span className="text-xl font-medium">
                            {weatherData.temp}°C
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-semibold text-xl">
                            {weatherData.city}
                        </span>
                        <span className="font-extralight text-xs">
                            {weatherData.weather_date}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
