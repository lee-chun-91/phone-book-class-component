const validateName = (value: string): boolean => {
    const result = /^[a-zA-Z]{1,20}$/.test(value);
    return result;
};

const validateEmail = (value: string): boolean => {
    const result = /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(
        value
    );
    return result;
};

const validatePhoneNumber = (value: string): boolean => {
    const result = /^\d{2,3}-\d{3,4}-\d{4}$/.test(value);
    return result;
};

const convertPhoneNumber = (value: string) => {
    value = value.replace(/[^0-9]/g, "");
    if (value.length < 3) {
        return value;
    } else {
        if (value.substring(0, 2) === "02") {
            if (value.length <= 5) {
                return value.substring(0, 2) + "-" + value.substring(2, 6);
            } else if (value.length > 5 && value.length <= 9) {
                return (
                    value.substring(0, 2) +
                    "-" +
                    value.substring(2, 6) +
                    "-" +
                    value.substring(6, 11)
                );
            } else if (value.length > 9) {
                return (
                    value.substring(0, 2) +
                    "-" +
                    value.substring(2, 6) +
                    "-" +
                    value.substring(6, 11)
                );
            }
        } else {
            if (value.length < 8) {
                return value;
            } else if (value.length == 8) {
                return value.substring(0, 3) + "-" + value.substring(3, 8);
            } else if (value.length >= 9) {
                return (
                    value.substring(0, 3) +
                    "-" +
                    value.substring(3, 7) +
                    "-" +
                    value.substring(7, 13)
                );
            }
        }
    }
};

const convertDate = (date: Date) => {
    const YY = date.getFullYear();
    const MM = date.getMonth() + 1;
    const DD = date.getDate();
    const hh = date.getHours();
    const mm = date.getMinutes();
    return YY + "년 " + MM + "월 " + DD + "일 " + hh + "시 " + mm + "분 ";
};

export {
    validateName,
    validateEmail,
    validatePhoneNumber,
    convertPhoneNumber,
    convertDate,
};
