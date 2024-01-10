import { ReactElement } from "react";
import { CalcFormProps } from "./types";

export function CalcForm(props: CalcFormProps): ReactElement {
    return (
        <form>
            <div className="md-3">
                <label className="form-label">Тип транспортного средства:</label>
                <select className="form-select" onChange={ props.onVehicleChange } value={props.vehicle}>
                    <option value="auto">Автомобиль</option>
                    <option value="moto">Мотоцикл</option>
                    <option value="board">Лодка</option>
                </select>
            </div>
            <div className="md-3">
                <label className="form-label">Аукцион:</label>
                <select className="form-select" name="auction">
                    <option value="copart">Copart</option>
                    <option value="iaai">Iaai</option>
                    <option value="manheim">Manheim</option>
                </select>
            </div>
            <div className="md-3">
                <label className="form-label">Площадка:</label>
                <select className="form-select" name="playground">
                    <option value="copart">Abilene</option>
                    <option value="iaai">ACE - Carson</option>
                    <option value="manheim">ACE - Perris</option>
                </select>
            </div>
        </form>
    );
}