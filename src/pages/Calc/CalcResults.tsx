import { CalcResultProps } from "./types";

export function CalcResult(props: CalcResultProps) {
    return (
        <>
            <div className="mt-3">
                <h3>Покупка и доставка</h3>
                <hr />
                <div className="d-flex justify-content-between">
                    <div>Стоимость авто</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Аукционный сбор</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Транспортировка в порт</div>
                    <div>{ props.portTransit } $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Доставка морем</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Стосмоить услуг</div>
                    <div>123432 $</div>
                </div>
            </div>
            <div className="mt-3">
                <h3>Растаможка и оформление</h3>
                <hr />
                <div className="d-flex justify-content-between">
                    <div>Таможенная пошлина</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Таможенный сбор</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>Расходы на СВХ</div>
                    <div>123432 $</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>ИТОГО</div>
                        <div>123432 $</div>
                </div>
            </div>
        </>
    );
}