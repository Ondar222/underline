import { Button } from "antd";
import { useRouter } from "next/router";

const CalculateBanner = () => {
  const router = useRouter()
  return (
    <div>
      <div className="header__name__calculate">
        <h1 className="heading__calc">
          Воспользуйтесь онлайн калькулятором, чтобы узнать стоимость угля в
          вашем районе
        </h1>
        <p className="paraghrpaph__calculate">
          Калькулятор поможет рассчитать стоимость угля с учетом доставки
        </p>
      </div>
      <Button className="button red" onClick={() => router.push('/calculate')}>Рассчитать</Button>
    </div>
  );
};

export default CalculateBanner;
