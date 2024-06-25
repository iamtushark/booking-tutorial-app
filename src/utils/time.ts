export const generateTimeSlots = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        times.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return times;
};