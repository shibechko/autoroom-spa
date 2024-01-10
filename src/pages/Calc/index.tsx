import { useMemo, useState } from "react";
import { CalcForm } from "./CalcForm";
import { CalcResult } from "./CalcResults";
import vehicles from '@autrm/data/vehicles.json';

export function Calc() {
    const [ vehicle, setVehicle ] = useState('auto');
    const portTransit = useMemo(() => {
        return vehicles.find((item) => item.type === vehicle)?.portTransit;
    }, [vehicle]);

    function vehicleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        setVehicle(e.currentTarget.value);
    } 

    return (
        <div className="container">
            <div className="row">
                <h1>Калькулятор стоимости</h1>
            </div>

            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <CalcForm 
                        vehicle={ vehicle }
                        onVehicleChange={ vehicleChange }/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <CalcResult 
                        portTransit={ portTransit }/>
                </div>
            </div>
        </div>
    );
}