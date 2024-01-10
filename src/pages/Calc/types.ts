export interface CalcFormProps {
    vehicle: string;
    onVehicleChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export interface CalcResultProps {
    portTransit: number | undefined;
}