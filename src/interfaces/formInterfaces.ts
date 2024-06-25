export interface PersonalDetailInputs {
    name: string;
    email: string;
    phone_num: number;
    Address: string;
}

export interface BookingDetailInputs {
    appointment_date: Date;
    appointment_time: string;
}

export interface ServiceDetailInputs {
    vehicle_type: string;
    vehicle_model_no: string;
}
